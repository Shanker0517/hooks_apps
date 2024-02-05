// import { Avatar } from "./Avatar";

// export default function Profile(){
//     return(
//         <div>
//         <Avatar 
//         person={{
//             name: 'digital_camera_photo', 
//             image: "./digital_camera_photo.jpg"
//         }}
//         size={150}
//         />
//         <Avatar 
//             person={{
//                 name: 'digital_camera_photo', 
//                 image: "./digital_camera_photo.jpg"
//             }}
//             size={100}
//             style={{ border: '2px solid black' }}
//         />
//         <Avatar 
//         person={{
//             name: 'digital_camera_photo', 
//             image: "./digital_camera_photo.jpg"
//         }}
//         size={50}
//         />
//         </div>
//     )
// }





import { getImageUrl } from './utils.js';


function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}){
  return(
  <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b> 
            {a=>{
              awards.forEach(element => {
                
              });
            }}
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
  );
}



export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      {/* <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section> */}
    </div>
  );
}
