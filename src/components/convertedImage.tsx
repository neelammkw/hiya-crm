export const convertImageToBase64 = async (imagePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
          if (reader.result) {
            resolve(reader.result.toString()); // Convert the blob to a Base64 string
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(xhr.response);
      };
      xhr.onerror = reject;
      xhr.open('GET', imagePath);
      xhr.responseType = 'blob';
      xhr.send();
    });
  };
  