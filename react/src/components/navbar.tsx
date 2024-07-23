import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

const Navbar = () => {
    return (
        <Tabs defaultValue="home" className="w-full max-w-[800px]">
            <TabsList className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 text-white">
                <TabsTrigger value="home" className="sm:col-span-1">Home</TabsTrigger>
                <TabsTrigger value="work" className="sm:col-span-1">My Work</TabsTrigger>
                <TabsTrigger value="contact" className="sm:col-span-1">Contact</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
                <Card>
                    <p>Home content</p>
                </Card>
            </TabsContent>
            <TabsContent value="work">
                <Card>
                    <p>My Work content</p>
                </Card>
            </TabsContent>
            <TabsContent value="contact">
                <Card>
                    <p>Contact content</p>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

export default Navbar;