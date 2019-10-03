const units_of_measure = [' B', ' KB', ' MB', ' GB', ' TB', ' PB'];

// Converts number of bytes to human readable notation
export default function convertBytesToHuman(bytes) {
  if (typeof bytes != 'number' || bytes < 0 || bytes.toFixed(0) != bytes || bytes == NaN || bytes == 1/0) {
    return false;
  } else {
    var bytes_tmp = bytes;
    var suffix_index = 0;

    while (bytes_tmp >= 1024) {
      bytes_tmp /= 1024;
      suffix_index += 1;
    }

    return (Math.round(bytes_tmp * 100) / 100).toString() + units_of_measure[suffix_index];
  }
}
