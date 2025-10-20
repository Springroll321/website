import Carousel from './Carousel';

import pe1 from '../../assets/pfp/pe1.jpg';
import pe2 from '../../assets/pfp/pe2.jpg'; 
import pe3 from '../../assets/pfp/pe3.jpg';

const profileImages = [ pe1, pe2, pe3 ];
function ProfileCarousel() {
    return (
         <div className="flex-1 flex items-center justify-center ">
            <Carousel images={profileImages} autoPlayInterval={4000}/>
          </div>
    )
}
export default ProfileCarousel;