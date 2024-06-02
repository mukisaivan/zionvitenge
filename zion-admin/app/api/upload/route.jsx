import multiparty from 'multiparty';
import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3';
// import fs from 'fs';
import mime from 'mime-types';
import connectMongoDB from '@/lib/mongodd'
import { v4 as uuidv4 } from 'uuid';
// import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";


import { NextResponse } from 'next/server'
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';


dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export async function POST(req) {


  await connectMongoDB();
  try {
    const formData = await req.formData();

    console.log('++++++++form data:',formData);
    // const file = formData.get("file");
    const files = formData.getAll("files");
    console.log('++++++++files:', files);
    

    
    if (files.length === 0) {
      console.error('No files found in form data');
      return NextResponse.json({ error: 'No files found' }, { status: 400 });
    }

    
    const uploadPromises = files.map(async (file) => {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);


      // putting files on local storage
      // await fs.writeFile(`./public/uploads/${file.name}`, buffer);


      // Generate a random UUID using uuidv4
      const uuid = uuidv4();

      // Append the UUID to the original filename
      const originalFilename = file.name;
      const fileExtension = originalFilename.split('.').pop(); // Get the file extension
      const baseName = originalFilename.replace(`.${fileExtension}`, ''); // Get the base name without extension
      const newFilename = `${baseName}-${uuid}.${fileExtension}`; // Construct the new filename

      // Create a reference to the Firebase Storage location
      const storageRef = ref(storage, `uploads/${newFilename}`);

      // Upload the file
      const snapshot = await uploadBytes(storageRef, buffer, {
        contentType: mime.lookup(originalFilename) || 'application/octet-stream',
      });

      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    });

    const downloadURLs = await Promise.all(uploadPromises);

    console.log('Files available at', downloadURLs);

    return NextResponse.json( { downloadURLs }, { status: 200 }, {message: 'Files uploaded successfully'});

  } catch (e) {
    console.error('Error uploading files:', error);
    return NextResponse.json({ error: 'Error uploading files' }, { status: 500 });
  }
}
