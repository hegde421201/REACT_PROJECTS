import React, { useRef, useEffect, useState } from "react";

const Watermark = () => {
  const canvasRef = useRef(null);

  const [generatedImage, setGeneratedImage] = useState(null);

  const jsonDataWatermark = {
    alpha: 255,
    textSize: 30,
    x_axis: 30,
    y_axis: 110,
    diff: 33,
    underline: false,
    dataArray: [
      {
        name: "latlong",
        value: "Lat: 19.1268433, Lng: 73.00669471",
        tobePrinted: true,
      },
      { name: "siteName", value: "ENB NIRMAL NIWAS", tobePrinted: true },
      { name: "siteId", value: "Sally Sally", tobePrinted: true },
      {
        name: "timestamp",
        value: "12:20:31 Wed Jul 19 2023",
        tobePrinted: true,
      },
    ],
  };

  useEffect(() => {
    //handle image data from the react native
    function handleEventImage(message) {
      try {
        //  let jsonData = findSubstrings(message.data, "{", "}");
        //  processMessages(jsonData);

        // let jsonData = findSubstrings(message.data, "{", "}");
        // let image64 = processMessages(jsonData);

        // setGeneratedImage(image64);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const image = new Image();
        //image.src = "data:image/jpeg;base64," + image64; // Load image result
        image.src = process.env.PUBLIC_URL + "/rhinos.jpg"; // Load image from the public directory

        image.onload = () => {
          canvas.width = image.width;
          canvas.height = image.height;

          console.log("width", canvas.width);
          console.log("height", canvas.height);
          // Draw the original image on the canvas
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

          let dataArr = jsonDataWatermark.dataArray;
          // ctx.rect(0, 0, image.width, image.height);
          ctx.imageSmoothingEnabled = true; // Enable antialiasing
          let alphaValue = jsonDataWatermark.alpha / 255.0;

          console.log("ALPHA", alphaValue, "KYA");
          /*   
          ctx.fillStyle =
            "rgba(255, 255, 255, " + alphaValue.toPrecision(2) + ")"; // Set text color with opacity
 */
          ctx.font = jsonDataWatermark.textSize + "px Arial"; // Set the font style and size
          ctx.fillStyle = "rgba(255, 0, 0, 0.5)"; // Set text color with opacity
          // Add a text watermark
          // Draw the watermark text on the canvas
          let x_axis = jsonDataWatermark.x_axis;
          let y_axis = jsonDataWatermark.y_axis;
          let y_axis_fill = canvas.height - y_axis;
          dataArr.forEach((item) => {
            // Access properties of the current item
            // const name = item.name;
            const value = item.value;
            const tobePrinted = item.tobePrinted;

            if (tobePrinted) {
              console.log("JF", y_axis_fill);

              ctx.fillText(value, x_axis, y_axis_fill);
              y_axis_fill = y_axis_fill - jsonDataWatermark.diff;
              if (jsonDataWatermark.underline) {
                // Draw an underline for the text
                const textWidth = ctx.measureText(value).width;
                ctx.beginPath();
                ctx.moveTo(x_axis, y_axis_fill + 2); // 2 pixels below the text baseline
                ctx.lineTo(x_axis + textWidth, y_axis_fill + 2); // Line width equals the width of the text
                // Set the thickness of the underline
                ctx.lineWidth = 10; // Adjust the thickness as needed
                ctx.strokeStyle = "red"; // Adjust the color as needed

                ctx.stroke();
              }
            }
          });

          // Convert canvas content to a new image with 20% quality
          const newImage = new Image();
          newImage.src = canvas.toDataURL("image/jpeg", 0.5); // Set the quality to 20%

          // Set the generated image in the state
          setGeneratedImage(newImage);
        };
        //  setReceivedMessages(message.data);
        //console.log(receivedMessages);
      } catch (error) {
        console.error("Invalid JSON format.", error);
      }
    }

    // Add event listener to handle messages from React Native app
    window.addEventListener("message", handleEventImage);

    return () => {
      window.removeEventListener("message", handleEventImage);
    };
  }, [generatedImage, jsonDataWatermark.dataArray]);

  const findSubstrings = (inputString, openingDelimiter, closingDelimiter) => {
    //substring array
    const substrings = [];
    //start index of the opening delimiter

    let startIndex = inputString.indexOf(openingDelimiter);
    //index of the closing delimiter
    let endIndex = -1;

    while (startIndex !== -1) {
      //-----1----get the first instance of the closing delimiter
      endIndex = inputString.indexOf(closingDelimiter, startIndex + 1);

      if (endIndex !== -1) {
        //extract the substring now using both the indices
        const substring = inputString.substring(startIndex, endIndex + 1);
        substrings.push(substring);
        startIndex = inputString.indexOf(openingDelimiter, endIndex + 1);
      } else {
        break;
      }
    }

    substrings.forEach((data) => console.log(data));
    return substrings;
  };

  const processMessages = (dataArray) => {
    const messageContents = [];

    if (Array.isArray(dataArray)) {
      for (const element of dataArray) {
        const object = JSON.parse(element);
        messageContents.push(object.content);
      }
    } else {
      messageContents.push("Invalid data array.Check data and message type");
    }

    return messageContents;
  };
  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
      ></canvas>
      {generatedImage && (
        <div>
          <img
            src={generatedImage.src}
            alt="testing"
            style={{ width: "100%", height: "100%", display: "none" }}
          />
        </div>
      )}
    </div>
  );
};

export default Watermark;
