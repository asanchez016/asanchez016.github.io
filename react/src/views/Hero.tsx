import  Button  from '@/components/ui/button'
import  Avatar, { AvatarImage }  from "@/components/ui/avatar"
import PP from '@/assets/photo.png'
import  Card, { CardTitle }  from '@/components/ui/card'

function Hero() {

  return (
    <>
      <div className='mb-10 text-center'>
        <h2 className="text-xl font-bold">Hello! Moi c'est Mandy</h2>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <Avatar className="w-40 h-40 rounded-full border-10 transition-opacity duration-200">
          <AvatarImage src={PP} />
        </Avatar>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full gap-8 mt-10 lg:gap-16 lg:w-150'>
        <Card className="col-span-1 hover:cursor-pointer hover:shadow-lg transition-shadow lg:col-span-2">
          <CardTitle className="text-xl font-bold p-10">About me</CardTitle>
        </Card>
        <Card className="col-span-1 hover:cursor-pointer hover:shadow-lg transition-shadow lg:col-span-2">
          <CardTitle className="text-xl font-bold p-10">About me</CardTitle>
        </Card>
        <Card className="col-span-1 hover:cursor-pointer hover:shadow-lg transition-shadow lg:col-span-2">
          <CardTitle className="text-xl font-bold p-10">About me</CardTitle>
        </Card>
        <Card className="col-span-1 hover:cursor-pointer hover:shadow-lg transition-shadow lg:col-span-2">
          <CardTitle className="text-xl font-bold p-10">About me</CardTitle>
        </Card>
        <Card className="col-span-2 hover:cursor-pointer hover:shadow-lg transition-shadow lg:col-span-2">
          <CardTitle className="text-xl font-bold p-10">About me</CardTitle>
        </Card>
      </div>
      <div className='flex flex-col items-center justify-center mt-10'>
        <Button variant="secondary" className="w-40">
          Contact me
        </Button>
      </div>

    </>
  )
}

export default Hero