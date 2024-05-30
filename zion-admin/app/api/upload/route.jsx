import multiparty from 'multiparty';
import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3';
// import fs from 'fs';
import mime from 'mime-types';
import connectMongoDB from '@/lib/mongodd'

// import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";
const bucketName = 'zion-vitenge';
import { NextResponse } from 'next/server'
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';


// Firebase configuration (you can also import this from a separate config file)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);




export async function POST(req) {

  await connectMongoDB();
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const arrayBuffer = await file.arrayBuffer();
    // const buffer = new Uint8Array(arrayBuffer);
    // await fs.writeFile(`./public/uploads/${file.name}`, buffer);

    const buffer = await fs.readFile(filePath);

    // Create a reference to the Firebase Storage location
    const storageRef = ref(storage, `uploads/${file.originalFilename}`);

    // Upload the file
    const snapshot = await uploadBytes(storageRef, buffer, {
      contentType: mime.lookup(filePath) || 'application/octet-stream',
    });

    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);

    console.log('File available at', downloadURL);

    revalidatePath("/");
    console.log(file.name);

  // return NextResponse.json({message: 'success photo recieved'});

  return NextResponse.json({ message: 'File uploaded successfully', downloadURL });

  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'An error occured on the server' });
  }
}

