const videoElement = document.getElementById("video");
const button = document.getElementById("button");
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getMediaDisplay();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("whoops,error here:", error);
  }
}
button.addEventListener("click", async () => {
  button.disable = true;
  await videoElement.requestPictureInPicture();
  button.disable = false;
});
selectMediaStream();
