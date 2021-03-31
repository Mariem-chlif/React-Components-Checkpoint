
let ProfilPhotoStyle = {
    border: "2px solid white",
    padding: "10px",
    borderRadius: "50px 20px",
    width: "200px",
    height: "200px"
}


const ProfilPhoto = () => {
    return (
    <div>
    <img src="/profil.jpeg" style={ProfilPhotoStyle} alt="My profile"/>
</div>
    );
};

export default ProfilPhoto;
