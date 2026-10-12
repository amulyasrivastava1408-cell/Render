import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { fetchProfile, ProfileError } from "@/lib/fetchers";
import { blankProfile, isPlatformId, isValidHandle, PLATFORMS } from "@/lib/platforms";

export default async function SharedProfilePage({
  params,
}: {
  params: Promise<{ platform: string; handle: string }>;
}) {
  const { platform, handle: rawHandle } = await params;
  const handle = rawHandle.replace(/^@/, "");

  if (!isPlatformId(platform) || !isValidHandle(handle)) notFound();

  let profile = blankProfile(platform, handle);
  let error: string | undefined;
  if (PLATFORMS[platform].fetchable) {
    try {
      profile = await fetchProfile(platform, handle);
    } catch (cause) {
      error = platform === "instagram"
        ? "Couldn't read that Instagram profile, so fill in the details yourself."
        : cause instanceof ProfileError
          ? cause.message
          : "Something went wrong.";
    }
  }

  return <HomePage initialProfile={{ platform, handle, profile, error }} />;
}
