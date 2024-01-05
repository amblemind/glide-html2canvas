window.function = async function(html) {
  if (!html.value) {
    return undefined;
  }

  // Create an element to hold the HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html.value;
  tempDiv.style.position = 'absolute';
  tempDiv.style.left = '-9999px';
  document.body.appendChild(tempDiv);

  // Convert HTML to image
  try {
    const canvas = await html2canvas(tempDiv);
    
    // Get base64 encoded image
    const imageBase64 = canvas.toDataURL('image/png');
    
    document.body.removeChild(tempDiv); // Clean up
    return imageBase64; // Return the base64 encoded image
  } catch (error) {
    console.error('Error converting HTML to image:', error);
    document.body.removeChild(tempDiv); // Clean up
    return "ERROR";
  }
};
