import React from 'react'
import './rightSide.css'
import story from '../Components/story.json';
import imageRightSideProfile from '../assets/shraddha.jpg';
import imageRightSideProfile2 from '../assets/chomu.jpg';
import imageRightSideProfile3 from '../assets/baby.jpg';
import imageRightSideProfile4 from '../assets/Sharukhkhan.jpg';
import imageRightSideProfile5 from '../assets/salman.jpg';
   



const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
};

// Import all images from the assets folder
const images = importAll(require.context('../assets', false, /\.(jpg|jpeg|png)$/));
const RightSide = () => {
    const storys = story.story;
    return (
        <div className="rightSideHome">
            <div className="topProfileRight">
                <div className="leftRightProfile">
                    <div className="imageDivRightSide">
                        <img className="imageRightSideProfile" src={imageRightSideProfile} />
                    </div>
                    <div className="userNameBlock">
                        <div className="userNameRightSide">_Shraddhakappor</div>
                        <div className="userfullName">Shraddha Kapoor</div>
                    </div>
                </div>
                <div className="switchBtn">Switch</div>
            </div>
            <div className="bottomRightSide">
                <div className="suggestedBlock">
                    <div className="suggestedForYou">Suggested for you</div>
                    <div className="seeAll">See All</div>
                </div>
                <div className="followBlockRightSide">
                    <div className="topProfileRightBottomProfile">
                        <div className="leftRightProfile">
                            <div className="imageDivRightSide">
                                <img className="imageRightSideProfile2" src={imageRightSideProfile2} />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">_Shakti</div>
                                <div className="userfullName">New to Instagram</div>
                            </div>
                        </div>
                        <div className="switchBtn">Follow</div>
                    </div>
                    <div className="topProfileRightBottomProfile">
                        <div className="leftRightProfile">
                            <div className="imageDivRightSide">
                                <img className="imageRightSideProfile3" src={imageRightSideProfile3} />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">_Kaira</div>
                                <div className="userfullName">New to Instagram</div>
                            </div>
                        </div>
                        <div className="switchBtn">Follow</div>
                    </div>
                    <div className="topProfileRightBottomProfile">
                        <div className="leftRightProfile">
                            <div className="imageDivRightSide">
                                <img className="imageRightSideProfile4" src={imageRightSideProfile4} />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">_Sharukh</div>
                                <div className="userfullName">New to Instagram</div>
                            </div>
                        </div>
                        <div className="switchBtn">Follow</div>
                    </div>
                    <div className="topProfileRightBottomProfile">
                        <div className="leftRightProfile">
                            <div className="imageDivRightSide">
                                <img className="imageRightSideProfile5" src={imageRightSideProfile5} />
                            </div>
                            <div className="userNameBlock">
                                <div className="userNameRightSide">_Salman</div>
                                <div className="userfullName">New to Instagram</div>
                            </div>
                        </div>
                        <div className="switchBtn">Follow</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RightSide
