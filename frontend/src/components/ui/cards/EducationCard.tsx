import { Card } from "./SimpleCard";
import frc from '../../../assets/education/frc.png';
import uofm from '../../../assets/education/bisons.png';
import studying from '../../../assets/education/studying.jpg';
import totoro from '../../../assets/totoro.png';
function EducationCard() {
    return (
        <div>
            <div className="min-h-1/2 flex pt-48 pl-12 " id="education" >
                <img className="w-1/8 h-1/8 animate-bounce select-none" src={totoro} />
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full md:w-1/2 pr-16"  >
                    <Card backgroundClassName="bg-linear-to-t from-blue-950/75 to-cyan-950/75 hover:from-blue-950/90 hover:to-cyan-800/90">
                        <Card.Header className="text-6xl font-bold text-amber-50 p-8 ">
                            Education
                        </Card.Header>
                        <Card.Body className="text-2xl text-amber-50 p-6 space-y-4 ">
                            <div  className="flex items-center ">
                                <img src={uofm} alt="bisons logo" className="w-[70px] h-[100px]" />
                                <div className="pl-8">
                                    
                                    <h2 className="text-3xl font-bold text-white p-4 flex">
                                    University of Manitoba🎓
                                    </h2>
                                    <p className=" text-amber-50 indent-5">
                                        Bachelor of Science in Computer Science
                                    </p>
                                    <p className=" text-amber-50 indent-5">
                                        Graduated June 2025
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center ">
                                <img src={frc} alt="frc logo" className="w-[70px] h-[90px]" />
                                <div className="pl-8">
                                    <h2 className="text-3xl font-bold text-white p-4 flex">
                                Fort Richmond Collegiate🏫
                                    </h2>
                                    <p className=" text-amber-50 indent-5">
                                        High School Diploma
                                    </p>
                                    <p className="text-amber-50 indent-5">
                                        Graduated June 2020
                                    </p>
                                </div>
                                
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                
                <img src={studying} className="rounded-4xl"/>
                
            </div>
        </div>
    );
}
export default EducationCard;