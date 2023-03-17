function uploadImage(e, setPicture) {
  if (e.currentTarget.files && e.currentTarget.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      setPicture(e.currentTarget.result);
    };
    reader.readAsDataURL(e.currentTarget.files[0]);
  }
}

export default uploadImage;
