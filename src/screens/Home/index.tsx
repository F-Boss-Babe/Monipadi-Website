import React, { FC, useState } from "react";
import TwitterLogo from "../../assets/images/twitter.png";
import SavingTargetImg from "../../assets/images/monipadi-landing-image.png";
import CoachingIcon from "../../assets/images/Coaching-icon.png";
import PersonalFinanceIcon from "../../assets/images/Personal-finance-icon.png";
import TimelineImage from "../../assets/images/Timeline-image.png";
import TheGoal from "../../assets/images/thegoal.png";
import TakeFullControlImage from "../../assets/images/take-full-control-image.png";
import BuildingImage from "../../assets/images/building-image.png";
import RocketImage from "../../assets/images/rocket.png";
import Profile1 from "../../assets/images/profile-1.png";
import Profile2 from "../../assets/images/profile-2.png";
import MonipadiImage from "../../assets/images/monipadi-coming-soon-image.png";
import Monipadi from "../../assets/images/monipadi.png";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
import WhatsappIcon from "../../assets/images/whatsapp-icon.svg";
import InstagramIcon from "../../assets/images/instagram-icon.svg";
import MonipadiMobile from "../../assets/images/monipadi-mobile.svg";
import AboutMonipadi from "../../assets/images/About Monipadi.svg";
import Community from "../../assets/images/Community.svg";
import Product from "../../assets/images/Product.svg";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import "./style.css";

const Home: FC = () => {
  const [email, setEmail] = useState("");
  const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_U}&amp;id=${process.env.REACT_APP_ID}&amp;f_id=${process.env.REACT_F_ID}`;
  //process.env.REACT_APP_TITLE

  return (
    <>
      <section className="items-center bg-[#F7F7F7] p-2 pb-[160px]">
        <div className="xl:container mx-auto pt-6">
          <div className="hidden font-medium ml-auto w-72 text-right sm:flex justify-end">
            <div>
              Powered By{" "}
              <span className="text-[#E2AC4B]">Finance Boss Babe</span>
            </div>

            <span className="ml-2 w-6 h-6 bg-[#E2AC4B] inline-block"></span>
          </div>
          <div className="mt-[65px] md:flex justify-between">
            <div className="md:w-[43%] space-y-8">
              <div className="text-xs md:text-[0.8rem] bg-[#D0F6EF] sm:w-[375px] pt-1.5 pb-1.5 text-center rounded">
                <img
                  src={TwitterLogo}
                  alt="twiter"
                  className="inline-block mr-1"
                />
                <span className="text-[#3FA9F5] font-bold">@monipadi - </span>
                Join the #500,000 savings challenge
              </div>
              <h1 className="text-[2.25rem] md:text-[4rem] leading-none font-semibold">
                Empowering women through personal finance
              </h1>
              <p className="text-[0.875rem] md:text-[1.06rem] md:w-[80%]">
                We help foster <b>financial literacy</b> in <b>women</b>,
                helping more women break the bias by giving them a chance
                through <b>financial inclusion</b>, helping them live their life
                on their own terms.
              </p>
              <div className="flex gap-3">
                <a href="mailto:mjex10@gmail.com?subject=Volunteer : Become a boss babe&body=Hi Monipadi%0AI am interested in joining the mission to raise the next generation of financially Independent women across Africa." className=" w-[55%] bg-[#19A59E] text-[0.8rem] md:text-[1.25rem] py-[6px] md:py-[9px] leading-[30px] text-white text-center rounded-lg font-semibold">
                  Become&nbsp;A&nbsp;Volunteer
                </a>
                <a
                  href="https://chat.whatsapp.com/Gxqhrz69nXV5ka8YO5TImj"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[35%] text-[0.8rem] md:text-[1.25rem] text-[#093A6B] text-center py-[6px] md:py-[9px] leading-[30px] font-semibold"
                >
                  Learn&nbsp;More
                </a>
              </div>
            </div>
            <div className="mt-[100px] md:mt-0 md:w-[47%]">
              <img className="w-[100%]" src={SavingTargetImg} alt="Savings" />
            </div>
          </div>
        </div>
      </section>
      <section className="xl:container mx-auto p-2 pb-[170px]" id="about">
        <div className="xl:container mx-auto">
          <div className="hidden md:block border-l border-black h-[132px] w-[100%]"></div>

          <div className="md:flex justify-between">
            <div className="md:w-[438px] space-y-[24px]">
              <h2 className="text-[2rem] md:text-[2.625rem] mt-4 md:leading-none font-semibold">
                Happy to serve women of all shapes and Kind
              </h2>
              <p className="text-[0.875rem] md:text-[1.06rem]">
                We help foster financial literacy in women, helping more women
                break the bias by giving them a chance through financial
                inclusion, helping them live their life on their own terms.
              </p>
            </div>
            <div className="flex gap-x-[50px] md:w-[60%] overflow-x-auto scroll-m-0 mr-[-8px] md:mr-0 mt-[44px] md:mt-0">
              <SecondSectionCard
                img={CoachingIcon}
                header={"Money and Career Coaching"}
                content="Gain confidence in your financial goals and work with a money coach who is dedicated to meeting those goals with you."
              />
              <SecondSectionCard
                img={PersonalFinanceIcon}
                header={"Personal Finance Management"}
                content="Personal finance is just that: personal. We assist women in assessing their financial situation, both future and present selves."
              />

              <SecondSectionCard
                img={PersonalFinanceIcon}
                header={"Building wealth"}
                content="Put your money to work with our personalized savings and investment platform."
              />
            </div>
          </div>
          <div className="mt-[157px] w-[100%] overflow-x-auto flex gap-[47px]  mr-[-8px] md:mr-0">
            <img
              className="w-[90%] min-w-[1164px]"
              src={TimelineImage}
              alt="Timeline"
            />
            <div className="w-[5%] min-w-[20px] hidden md:flex flex-col justify-end items-center">
              <img className="w-[20px] h-[118px]" src={AboutMonipadi} alt="" />
              <span className="w-[1px] h-[233px] bg-[#19A59E] mt-[18px]"></span>
            </div>
          </div>
          <div className="mt-[67px] space-y-6">
            <h2 className="text-[1.25rem] font-semibold">The story thus far</h2>
            <div className="flex gap-[40px] md:gap-[180px] overflow-y-auto mr-[-8px] md:mr-0">
              <div className="space-y-6 w-[303px] min-w-[303px]">
                <h4 className="font-semibold">The idea</h4>
                <h3 className="font-semibold text-[1.25rem]">
                  Finance Boss Babe started in 2019 as a group on Facebook to
                  empower women through financial literacy,{" "}
                </h3>
                <p className="">
                  this was after our founders on their personal quest to
                  financial freedom realized that the financial literacy gap
                  between men and women was high.{" "}
                </p>
              </div>
              <div className="space-y-6 w-[303px] min-w-[303px]">
                <h4 className="font-semibold">The Goal</h4>
                <img src={TheGoal} alt="" />
                <p className="">
                  {" "}
                  It was just meant to be a safe space where women could talk
                  about their money wins and lose and more but it grew to be
                  something more...{" "}
                </p>
              </div>
              <div className="space-y-6 w-[303px] min-w-[303px]">
                <h4 className="font-semibold">The Result</h4>
                <p>
                  Our Name “Finance Boss Babe” was inspired by the outcome we
                  want to achieve
                </p>
                <p className="text-[1.25rem] font-semibold">
                  making a woman who is a boss of her own in all ramifications
                  especially financially.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#093A6B] " id="service">
        <img
          src={TakeFullControlImage}
          className="hidden md:block absolute w-[100%] h-[100%]"
          alt=""
        />
        <div className="absolute w-[100%] h-[100%] bg-gradient-to-r from-[#093A6B] to-transparent">
          <div className="w-[100%] h-[100%] bg-gradient-to-r from-[#093A6B] to-transparent">
            <div className="w-[100%] h-[100%] bg-gradient-to-r from-[#093A6B] to-transparent">
              <div className="w-[100%] h-[100%] bg-gradient-to-r from-[#093A6B] to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="relative md:flex xl:container mx-auto pt-[100px] md:pt-[150px] pb-[36px] md:pb-[50px] flex-wrap ">
          <div className="text-white md:w-[576px] p-2 pb-[73px]">
            <h2 className="text-[2.25rem] leading-10 md:text-[3.75rem] font-semibold md:leading-[4rem] mb-[32px]">
              Take full control of your{" "}
              <span className="text-[#19A59E]">personal finance</span>
            </h2>
            <p className="font-semibold text-xl md:text-[1.5rem] leading-6 md:leading-[32px] mb-[16px]">
              Over the years, our trybe has grown consisting of amazing women
              who are willing to change the narrative and make good financial
              decisions.
            </p>
            <p className="leading-[20px] mb-[58px]">
              Our trybe has become a safe heaven where women talk money without
              being judged, and learn from our weekly saturday meetup to our
              wednesday book reviews.
            </p>
            <a
              href="https://chat.whatsapp.com/Gxqhrz69nXV5ka8YO5TImj"
              target="_blank"
              rel="noreferrer"
              className="md:w-[232px] font-semibold leading-[30px] bg-[#3A84EF] text-sm md:text-[1.25rem] text-center py-[6px] p-[11.5px] rounded-[10px]"
            >
              Join our Trybe
            </a>
          </div>

          <div className="md:h-[100%] mt-[105px] md:mt-auto md:ml-auto flex md:justify-end align-bottom text-white p-2 md:pb-[73px] md:p-0 md:w-auto">
            <div className="flex">
              <h1 className="font-semibold pr-[8px] text-[#D0F6EF] text-[2.25rem] leading-[53px]">
                07
              </h1>
              <div className="flex text-xs  flex-col font-semibold justify-center">
                <span>Coaching</span>
                <span>Programmes</span>
              </div>
            </div>
            <div className="flex ml-[32px]">
              <h1 className="font-semibold pr-[8px] text-[#D0F6EF] text-[2.25rem] leading-[53px]">
                +304
              </h1>
              <div className="flex text-xs  flex-col font-semibold justify-center">
                <span>Active</span>
                <span>Members</span>
              </div>
            </div>
          </div>
          <div className="w-[5%] hidden md:flex flex-col justify-end items-center">
            <img className="w-[20px]" src={Community} alt="" />
            <span className="w-[1px] h-[233px] bg-[#fff] mt-[18px]"></span>
          </div>
        </div>
      </section>
      <section className="pb-[189px] p-2">
        <div className="md:flex justify-between xl:container mx-auto pt-[152px] flex-wrap gap-y-[50px]">
          <img
            className="w-[100%] md:w-[45%] md:min-w-[400px]"
            src={BuildingImage}
            alt=""
          />
          <div className="w-[100%] md:w-[45%] min-w-[320px] mt-12 md:mt-0">
            <h1 className="text-[1.9rem] md:text-[2.6rem] font-semibold leading-[40px] md:leading-none mb-[24px] md:max-w-[453px]">
              Building a financially sustainable future for women
            </h1>
            <p className="md:text-[1.25rem] leading-[22px] md:leading-[28px] mb-12 md:mb-[110px] md:max-w-[421px]">
              We help foster financial literacy in women, helping more women
              break the bias by giving them a chance through financial
              inclusion, helping them live their life on their own terms.
            </p>
            <div className="flex p-[10px] align-middle bg-[#EDF5FA] max-w-[433px] rounded">
              <img
                className="w-[62px] h-[56px] mr-4"
                src={RocketImage}
                alt=""
              />
              <p className="text-[#093A6B]">
                We are on a mission to pave the future of financial literacy in
                women, one woman at a time{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between xl:container mx-auto mt-[150px] md:mt-[286px]">
          <div className="md:w-[35%]">
            <h2 className="hidden md:block text-[#C4C4C4] mb-[23px] font-semibold">
              Testimonials
            </h2>
            <h1 className="text-[2.25rem] leading-10 md:text-[2.6rem] mb-[34px] md:leading-none font-semibold">
              What people are saying about Monipadi
            </h1>
            <p>
              We help foster financial literacy in women, helping more women
              break the bias by giving them a chance through financial
              inclusion, helping them live their life on their own terms.
            </p>
          </div>
          <div className="md:w-[55%] mt-[50px] md:mt-0">
            <div className="flex gap-[15px] md:gap-[30px] border border-[#D0F6EF] px-[22px] md:px-[41px] py-[17px] md:py-[33px] rounded-[16px] drop-shadow-md mb-[28px] md:max-w-[621px]">
              <img className="w-[100px] h-[100px]" src={Profile1} alt="" />
              <div>
                <h1 className="mb-[8px] text-[#093A6B] md:text-[1.1rem] font-semibold ">
                  Nwakaego Abisola
                </h1>
                <p className="text-[0.75rem] md:text-[0.87rem]">
                  FBB has helped shaped my financial decisions and also helped
                  in making me more financially stable/ literate.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] md:gap-[30px] border border-[#D0F6EF] px-[22px] md:px-[41px] py-[17px] md:py-[33px] rounded-[16px] drop-shadow-md md:max-w-[621px]">
              <img className="w-[100px] h-[100px]" src={Profile2} alt="" />
              <div>
                <h1 className="mb-[8px] text-[#093A6B] md:text-[1.1rem] font-semibold ">
                  Beauty Tarisma
                </h1>
                <p className="text-[0.75rem] md:text-[0.87rem]">
                  FBB has helped broaden my knowledge on so many topics, however
                  one lesson which has done I and my business a lot of good is
                  learning how to separate my business money from my personal
                  money as a business person.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#19A59E] md:bg-white" id="product">
        <div className="bg-[#19A59E] md:px-[43px] md:pl-2 mx-auto xl:container rounded-[30px] text-white flex flex-wrap md:flex-nowrap">
          <div className="w-[5%] hidden md:flex flex-col justify-end items-center">
            <img className="w-[18px]" src={Product} alt="" />
            <span className="w-[1px] h-[233px] bg-[#fff] mt-[18px]"></span>
          </div>
          <div className="md:w-[40%] p-2 pt-[100px] md:pt-0">
            <div className="text-[0.75rem] md:text-[0.9rem] w-[104px] bg-[#E2AC4B] text-center text-white md:py-[10px] md:w-[147px] ">
              Coming Soon
            </div>
            <h1 className="text-[2.25rem] leading-10 md:text-[2.6rem] md:leading-none font-semibold mt-4 md:mt-[79px]">
              Build wealth easily with the power of compounding.
            </h1>
            <p className="mt-[24px] mb-[71px]">
              We help foster financial literacy in women, helping more women
              break the bias by giving them a chance through financial
              inclusion, helping them live their life on their own terms.
            </p>
          </div>
          <div className="flex align-bottom min-w-[320px] m-0 w-[100%] md:w-auto">
            <img
              className="hidden md:block md:h-[100%] w-100% md:w-auto"
              src={MonipadiImage}
              alt=""
            />
            <img className="md:hidden w-[100%]" src={MonipadiMobile} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7F7] p-2">
        <div className="flex pt-[127px] xl:container mx-auto justify-evenly flex-wrap-reverse gap-y-[113px]">
          <div className="w-[100%] md:w-auto">
            <img
              className="w-[191px] h-[41px] mb-[39px]"
              src={Monipadi}
              alt=""
            />
            <p className="mb-[16px]">No 1 Uju upaka, Startimes estate, Ago</p>
            <p className="mb-[31px]">+234 808 494 9553</p>
            <div className="flex space-x-[16px]">
              <a href="#" className="w-6 h-6">
                <img
                  className="w-[20px] h-[20px]"
                  src={InstagramIcon}
                  alt="Instagram"
                />
              </a>

              <a href="#" className="w-6 h-6">
                <img
                  className="w-[20px] h-[20px]"
                  src={TwitterIcon}
                  alt="Whatsapp"
                />
              </a>

              <a href="#" className="w-6 h-6">
                <img
                  className="w-[20px] h-[20px]"
                  src={WhatsappIcon}
                  alt="Whatsapp"
                />
              </a>
            </div>
          </div>
          <div className="w-[100%] md:w-[428px] mb-[24px]">
            <h1 className="text-[2rem] leading-[40px] font-semibold mb-4">
              Be the first to know when future content drops.
            </h1>
            <MailchimpSubscribe
              url={postUrl}
              render={({ subscribe, status, message }: any) => (
                <form className="space-x-[8px]">
                  <input
                    type="email"
                    required={true}
                    className="rounded-[8px] p-2 w-[60%] md:w-[255px]"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    disabled={status === "sending"}
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      subscribe({ EMAIL: email });
                    }}
                    className={`${
                      status === "success" ? "bg-[#19A59E]" : "bg-[#3A84EF]"
                    } flex-grow md:w-[145px] text-white text-center px-1 py-2 rounded-lg`}
                  >
                    {status === "sending"
                      ? "Loading..."
                      : status === "success"
                      ? "Sent"
                      : "Coming Soon"}
                  </button>
                </form>
              )}
            />
          </div>
        </div>
        <div className="border-t xl:container mx-auto py-[37px] mt-[105px]">
          C 2020 Finance Boss Babe LLC
        </div>
      </section>
    </>
  );
};

export default Home;

interface SecondSectionCardProps {
  img: string;
  header: string;
  content: string;
}

const SecondSectionCard = ({
  img,
  header,
  content,
}: SecondSectionCardProps) => {
  return (
    <div className="space-y-6 min-w-[196px] w-[196px] ">
      <img src={img} alt="money" className="w-[48px] h-[48px]" />
      <h3 className="text-[0.87rem] md:text-[1.25rem] font-semibold leading-[24px]">{header}</h3>
      <p className="text-[0.75rem] md-text-[0.9rem]">{content}</p>
    </div>
  );
};
