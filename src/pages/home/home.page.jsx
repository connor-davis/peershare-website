import { Label } from "@/components/ui/label";
import OverviewImage from "@/assets/Overview.png";
import IframeResizer from "@iframe-resizer/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <div className="grid px-3 lg:p-0 lg:grid-cols-4">
        <div className="grid gap-3 lg:col-span-2 lg:col-start-2 lg:grid-cols-2">
          <div className="flex flex-col w-full h-auto">
            <Label className="text-lg">Welcome to PeerShare</Label>
            <Label className="text-md text-muted-foreground">
              PeerShare is a Peer-To-Peer file sharing application that lets you
              easily share files with a friend.
            </Label>
          </div>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Ckdnclhc2IQ"
              title="PeerShare Demo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </AspectRatio>
          <div className="flex flex-col space-y-3 lg:col-span-2">
            <div className="flex flex-col">
              <Label className="text-md text-muted-foreground">
                To download PeerShare click the button below.
              </Label>
            </div>
            <Link to="/download">
              <Button className="w-full">Download PeerShare</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
