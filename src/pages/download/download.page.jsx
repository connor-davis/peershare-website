import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { DownloadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDeviceSelectors } from "react-device-detect";
import { Link } from "react-router-dom";

const releaseInfo = {
  url: "https://api.github.com/repos/connor-davis/peershare/releases/160913475",
  assets_url:
    "https://api.github.com/repos/connor-davis/peershare/releases/160913475/assets",
  upload_url:
    "https://uploads.github.com/repos/connor-davis/peershare/releases/160913475/assets{?name,label}",
  html_url: "https://github.com/connor-davis/peershare/releases/tag/v1.0.0",
  id: 160913475,
  author: {
    login: "github-actions[bot]",
    id: 41898282,
    node_id: "MDM6Qm90NDE4OTgyODI=",
    avatar_url: "https://avatars.githubusercontent.com/in/15368?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/github-actions%5Bbot%5D",
    html_url: "https://github.com/apps/github-actions",
    followers_url:
      "https://api.github.com/users/github-actions%5Bbot%5D/followers",
    following_url:
      "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
    gists_url:
      "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
    organizations_url:
      "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
    repos_url: "https://api.github.com/users/github-actions%5Bbot%5D/repos",
    events_url:
      "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
    type: "Bot",
    site_admin: false,
  },
  node_id: "RE_kwDOMKkNIs4Jl1hD",
  tag_name: "v1.0.0",
  target_commitish: "main",
  name: "v1.0.0",
  draft: false,
  prerelease: false,
  created_at: "2024-06-17T17:41:29Z",
  published_at: "2024-06-17T17:44:30Z",
  assets: [
    {
      url: "https://api.github.com/repos/connor-davis/peershare/releases/assets/174325463",
      id: 174325463,
      node_id: "RA_kwDOMKkNIs4KY_7X",
      name: "PeerShare-v1.0.0-Setup.exe",
      label: "",
      uploader: {
        login: "github-actions[bot]",
        id: 41898282,
        node_id: "MDM6Qm90NDE4OTgyODI=",
        avatar_url: "https://avatars.githubusercontent.com/in/15368?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/github-actions%5Bbot%5D",
        html_url: "https://github.com/apps/github-actions",
        followers_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/followers",
        following_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/following{/other_user}",
        gists_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/subscriptions",
        organizations_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/orgs",
        repos_url: "https://api.github.com/users/github-actions%5Bbot%5D/repos",
        events_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/github-actions%5Bbot%5D/received_events",
        type: "Bot",
        site_admin: false,
      },
      content_type: "raw",
      state: "uploaded",
      size: 84854738,
      download_count: 1,
      created_at: "2024-06-17T17:44:30Z",
      updated_at: "2024-06-17T17:44:32Z",
      browser_download_url:
        "https://github.com/connor-davis/peershare/releases/download/v1.0.0/PeerShare-v1.0.0-Setup.exe",
    },
  ],
  tarball_url:
    "https://api.github.com/repos/connor-davis/peershare/tarball/v1.0.0",
  zipball_url:
    "https://api.github.com/repos/connor-davis/peershare/zipball/v1.0.0",
  body: "",
};

export default function DownloadPage() {
  const [platform] = useDeviceSelectors(window.navigator.userAgent);
  const [releases, setReleases] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const disposeableTimeout = setTimeout(async () => {
      const response = await fetch(
        "https://api.github.com/repos/connor-davis/peershare/releases"
      );

      const text = await response.text();
      const json = JSON.parse(text);

      setReleases(json);

      setLoading(false);
    }, 100);

    return () => {
      clearTimeout(disposeableTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-3">
          <Label className="text-lg text-primary">Download PeerShare</Label>
          <Label className="text-muted-foreground">
            Click the download button on one of the releases below to download
            PeerShare for your Operating System.
          </Label>
        </div>
        <div className="flex flex-col items-center truncate">
          {isLoading && "Loading Releases"}
          {releases.length > 0 &&
            releases.map((release, index) => (
              <div
                key={index}
                className="flex flex-col w-full h-auto p-3 border-b"
              >
                <Label className="text-md">PeerShare {release.tag_name}</Label>
                <div className="grid items-center grid-cols-2 gap-3">
                  {release.assets.length > 0 &&
                    release.assets.map((asset) => (
                      <>
                        <Label className="text-muted-foreground">
                          {asset.name}
                        </Label>
                        <div className="flex items-center justify-end">
                          <Link to={asset.browser_download_url} target="_blank">
                            <Button size="icon">
                              <DownloadIcon className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
