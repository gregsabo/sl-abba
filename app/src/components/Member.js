import { React } from "react";
import { Link, useParams } from "react-router-dom";
import agnetha from "../images/agnetha.jpg";
import bjorn from "../images/bjorn.jpg";
import benny from "../images/benny.jpg";
import annifrid from "../images/annifrid.jpg";
import "./Member.css";

const MEMBERS = {
  agnetha: {
    name: "Agnetha Fältskog",
    bio:
      "Agnetha Åse Fältskog (Swedish pronunciation: [aŋˈnêːta ˈfɛ̂ltskuːɡ] (About this soundlisten)) (born 5 April 1950) is a Swedish singer, songwriter, musician and actress. She achieved success in Sweden after the release of her debut album Agnetha Fältskog in 1968, and reached international stardom as a member of the pop group ABBA,[1] which has sold over 360 million albums and singles worldwide, making them one of the best-selling music artists in history.[2]",
    image: agnetha,
  },
  bjorn: {
    name: "Björn Ulvaeus",
    bio:
      "Björn Kristian Ulvaeus ([ˈbjœːɳ ɵlˈvěːɵs] (About this soundlisten); born 25 April 1945)[1] is a Swedish singer-songwriter, producer, a member of the Swedish musical group ABBA, and co-composer of the musicals Chess, Kristina från Duvemåla, and Mamma Mia!. He co-produced the films Mamma Mia! and Mamma Mia! Here We Go Again with fellow ABBA member and close friend Benny Andersson.",
    image: bjorn,
  },
  benny: {
    name: "Benny Andersson",
    bio:
      "Göran Bror Benny Andersson (Swedish pronunciation: [ˈbɛ̌nːʏ ˈânːdɛˌʂɔn] (About this soundlisten); born 16 December 1946) is a Swedish musician, composer, producer, member of the Swedish music group ABBA, and co-composer of the musicals Chess, Kristina från Duvemåla, and Mamma Mia!. For the 2008 film version of Mamma Mia! and its 2018 sequel, Mamma Mia! Here We Go Again, he worked also as an executive producer. Since 2001, he has been active with his own band Benny Anderssons orkester.",
    image: benny,
  },
  annifrid: {
    name: "Anni-Frid Lyngstad",
    bio:
      "Princess Anni-Frid, Dowager Countess of Plauen (née Lyngstad;[a] born 15 November 1945), better known by her nickname Frida, is a Norwegian-Swedish singer, songwriter and environmentalist.[1] She is best known as one of the founding members and lead singers of the Swedish pop band ABBA.",
    image: annifrid,
  },
};

export default function Member() {
  const { id } = useParams();
  const member = MEMBERS[id];

  if (!member) {
    return (
      <div>
        Member not found. Try going <Link to="/">Home</Link>.
      </div>
    );
  }

  return (
    <div className="Member">
      <h1>{member.name}</h1>
      <img src={member.image} alt="Band member"/>
      <p>{member.bio}</p>
      <p>
        Go back <Link to="/">home</Link>.
      </p>
    </div>
  );
}
