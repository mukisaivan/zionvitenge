
export default function ExportedMeta({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <meta
        title= "Zion Centre"
        content= "Made by Ivan"
      />
      {children}
    </>
  
  )
}
