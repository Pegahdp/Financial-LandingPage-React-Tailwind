import Card from "./Card";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          imgSrc={Single}
          userType="Single User"
          planPrice="149$"
          storage="500 GB"
          options="1 Granted Users"
          speed="2"
        />
        <Card
          imgSrc={Double}
          userType="Dual Users"
          planPrice="189$"
          storage="800 GB"
          options="3 Granted Users"
          speed="5"
          defaultButtonStyle='bg-black text-white' 
          defaultCardStyle='md:my-0 my-8 bg-gray-100' 
                />
        <Card
          imgSrc={Triple}
          userType="Unlimited User"
          planPrice="200$"
          storage="1 TB"
          options="Unlimited Granted Users"
          speed="10"
        />
      </div>
    </div>
  );
}

export default Cards;
