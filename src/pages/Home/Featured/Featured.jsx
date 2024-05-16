import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
           <SectionTitle
           subHeading="Check it out"
           heading="Featured Item"
           ></SectionTitle> 
           <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, esse suscipit. Quidem modi quam laborum harum! Esse accusamus accusantium repellat hic! Dignissimos quaerat quae itaque ducimus! Reprehenderit accusamus cupiditate cum, illo soluta corrupti blanditiis ipsam laudantium et possimus quo eligendi ipsum debitis ea quidem. Eos tempora quae aliquam in totam.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;