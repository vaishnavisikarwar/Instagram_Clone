// import React from 'react'
// import './middleSide.css'
// import story from '../Components/story.json';
// import postInfoImg from '../assets/shraddha.jpg';

// const MiddleSide = () => {
//     const storys=story.story;
//   return (
//     <div className="middleHomeSide">
//         <div className='storyBlock'>{
//             storys?.map((item,index)=>{
//                 return(

//            <div className="storyParticular" >
//             <div className="imageDiv">
//              <img className='statusImg' src={item.img}/>

//             </div>
//             <div className='profileName'>{item.name}</div>
//                 </div>
//                 );

//             })
//             } 
//         </div>

//         <div className="postSection">
//             <div className="post">
//                 <div className="postInfo">
//                     <img className='postInfoImg' src={postInfoImg} alt=""/>


//                 </div>
//             </div>
//         </div>
//         </div>








//   );
// }

// export default MiddleSide

import React from 'react';
import './middleSide.css';
import story from '../Components/story.json';
import postInfoImg from '../assets/shraddha.jpg';
import postImg from "../assets/shraddha.jpg";
import likesection from "../assets/shraddha.jpg";
import likesection2 from "../assets/shraddha.jpg";
import postInfoImg1 from "../assets/Sharukhkhan.jpg";
import postImg1 from "../assets/Sharukhkhan.jpg";
import likesection1 from '../assets/Sharukhkhan.jpg';
import likesection3 from '../assets/Sharukhkhan.jpg';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

// Function to import images dynamically
const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
};

// Import all images from the assets folder
const images = importAll(require.context('../assets', false, /\.(jpg|jpeg|png)$/));

const MiddleSide = () => {
    const storys = story.story;

    return (
        <div className="middleHomeSide">
            <div className="storyBlock">
                {storys?.map((item, index) => (
                    <div className="storyParticular" key={index}>
                        <div className="imageDiv">
                            <img
                                className="statusImg"
                                src={images[item.img.replace('/assets/', '')]}
                                alt={`${item.name}'s story`}
                            />
                        </div>
                        <div className="profileName">{item.name}</div>
                    </div>
                ))}
            </div>

            <div className="postSection">
                <div className="post">
                    <div className="postInfo">
                        <img
                            className="postInfoImg"
                            src={postInfoImg}
                            alt="Post info"
                        />
                        <div className='postInfousername'>Shraddhakapoor</div>
                        <div className="timingInfo">.36 min</div>
                    </div>
                    <div className="postImg">
                        <img className='postImage' src={postImg} alt="post Img" />
                    </div>
                    <div className="iconsBlock">
                        <div className="leftIcon">
                            <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
                            <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
                            <SendOutlinedIcon sx={{ fontSize: "25px" }} />
                        </div>
                        <div>
                            <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
                        </div>
                        </div>
                        <div className="likesection">
                            <div className="imagesLike">
                            <img className='likeImg' src={likesection} alt="like section"/>
                            <img className='likeImg2' src={likesection2} alt="like section2"/>
                            </div>
                            <div className="noofLikes">112,456 Likes</div>
                        </div>
                       <div className="postAbout">
                        <div className='postAboutName'>Shraddhakapoor</div>
                        <div className="infoComment">Hello everyone !...more</div>


                       </div>
                       <div className="noofComment">View All 467 Comments</div>
                    <div className="addComment">Add a Comment...</div>
                    </div>
                </div>
                <div className="postSection">
                <div className="post">
                    <div className="postInfo">
                        <img
                            className="postInfoImg1"
                            src={postInfoImg1}
                            alt="Post info"
                        />
                        <div className='postInfousername'>Sharukhkhan</div>
                        <div className="timingInfo">.37 min</div>
                    </div>
                    <div className="postImg">
                        <img className='postImage1' src={postImg1} alt="post Img" />
                    </div>
                    <div className="iconsBlock">
                        <div className="leftIcon">
                            <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
                            <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
                            <SendOutlinedIcon sx={{ fontSize: "25px" }} />
                        </div>
                        <div>
                            <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
                        </div>
                        </div>
                        <div className="likesection">
                            <div className="imagesLike">
                            <img className='likeImg1' src={likesection1} alt="like section"/>
                            <img className='likeImg3' src={likesection3} alt="like section2"/>
                            </div>
                            <div className="noofLikes">112,456 Likes</div>
                        </div>
                       <div className="postAbout">
                        <div className='postAboutName'>Sharukhkhan</div>
                        <div className="infoComment">Hello everyone !...more</div>


                       </div>
                       <div className="noofComment">View All 467 Comments</div>
                    <div className="addComment">Add a Comment...</div>
                    </div>
                </div> 
                <div className="postSection">
                <div className="post">
                    <div className="postInfo">
                        <img
                            className="postInfoImg"
                            src={postInfoImg}
                            alt="Post info"
                        />
                        <div className='postInfousername'>Shraddhakapoor</div>
                        <div className="timingInfo">.36 min</div>
                    </div>
                    <div className="postImg">
                        <img className='postImage' src={postImg} alt="post Img" />
                    </div>
                    <div className="iconsBlock">
                        <div className="leftIcon">
                            <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
                            <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
                            <SendOutlinedIcon sx={{ fontSize: "25px" }} />
                        </div>
                        <div>
                            <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
                        </div>
                        </div>
                        <div className="likesection">
                            <div className="imagesLike">
                            <img className='likeImg' src={likesection} alt="like section"/>
                            <img className='likeImg2' src={likesection2} alt="like section2"/>
                            </div>
                            <div className="noofLikes">112,456 Likes</div>
                        </div>
                       <div className="postAbout">
                        <div className='postAboutName'>Shraddhakapoor</div>
                        <div className="infoComment">Hello everyone !...more</div>


                       </div>
                       <div className="noofComment">View All 467 Comments</div>
                    <div className="addComment">Add a Comment...</div>
                    </div>
                </div>
            </div>
        

    );
}

export default MiddleSide;
