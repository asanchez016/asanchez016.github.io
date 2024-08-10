import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

const Navbar = () => {
    return (
        <Tabs defaultValue="home" className="w-[800px]">
            <TabsList className="grid w-full grid-cols-2 text-white">
                <TabsTrigger value="home">Home</TabsTrigger >
                <TabsTrigger value="work" >My Work</TabsTrigger >
                <TabsTrigger value="contact" >Contact</TabsTrigger >
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
        </Tabs >
    );
};

export default Navbar;
