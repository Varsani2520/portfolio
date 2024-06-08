
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <>
    
      <div className="relative z-10 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-500">
                Get in touch with us to learn more about our services and how we can help your business succeed.
              </p>
              <form className="mt-8 grid grid-cols-1 gap-6 ">
                <div>
                  <Label htmlFor="name" className="text-black">Name</Label>
                  <Input id="name" className="text-white" required type="text" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-black">Email</Label>
                  <Input id="email" required type="email" className="text-white"/>
                </div>
                <div>
                  <Label htmlFor="message" className="text-black">Message</Label>
                  <Textarea id="message" className="text-white"required rows={4} />
                </div>
                <div>
                  <Button className="w-full rounded" type="submit" >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            <div className="mt-10 lg:mt-0">
            <iframe src="https://www.google.com/maps/embed?pb=!4v1715152692533!6m8!1m7!1sq9xR8EV2dyVnUA1caVdsyg!2m2!1d23.19237509753773!2d69.5601149531841!3f292.4096226297424!4f-12.551367978608283!5f0.7820865974627469" width="600" height="450" allowFullScreen="" loading="lazy" 
             style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              
            className="h-full w-full object-cover object-center rounded-lg"referrePolicy="no-referrer-when-downgrade"></iframe>
             
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
