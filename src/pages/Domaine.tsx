import React, { useEffect } from 'react';
import Navbar from "../components/main/Navbar";
import Menu from "../components/main/Menu";
import Footer from "../components/main/Footer";
import DomaineComponent from "../components/page/DomaineComponent";
import Lottie from "lottie-react";
import loadAnimation from "../images/loading.json";
export interface IDomaineProps { }



const arrayImg =
    [{
        id: 0,
        domain_name: "Domaine Bruno Clair",
        domain_description: "Bruno Clair founded the domaine which bears his name in 1979. Nowadays, it includes Clos de Bèze, Cazetiers, Clos St-Jacques, Vosne-Romanée, Clos du Fonteny, Chambolle-Musigny, Corton-Charlemagne, Pernand-Vergelesses, Aloxe-Corton, Gevrey-Chambertin and Petite Chapelle.",
        image_path: "assets/page/domaine/Domaine Brune Clair.png",
        link_url: "https://www.brunoclair.com"
    }, {
        id: 1,
        domain_name: "Domaine de Villaine",
        domain_description: "Domaine de Villaine is located in Bouzeron, nestled in the Côte Chalonnaise region between Chassagne-Montrachet and Santenay to the north and Rully and Mercurey to the south. Planted with vines by the monks of Cluny in the Middle Ages, this small, sunny valley has a rich and lengthy tradition of producing quality wines",
        image_path: "assets/page/domaine/Domaine de Villaine.png",
        link_url: "https://www.de-villaine.com"
    }, {

        id: 2,
        domain_name: "Domaine De la Pousse d'Or",
        domain_description: "The Domaine can be traced back to the Dukes of Burgundy and the year 1100. It is consisting mainly of premier   and grand crus in the villages of Morey-Saint-Denis, Chambolle-Musigny, Corton, Pommard, Volnay, Puligny-Montrachet and Santenay. The domaine's 18 hectares yield 90,000 bottles annually.",
        image_path: "assets/page/domaine/Domaine De la Pousse d_Or.png",
        link_url: "https://www.asianetfinesourcing.com/_files/ugd/7c4f49_b0804e2dae734400b97d6a19a8309e74.pdf"
    }, {
        id: 3,
        domain_name: "Comtes Lafon",
        domain_description: "The 16 hectare estate is comprised of some of the most famous 'Crus' in the region. Meursault, Puligny and Montrachet are planted with Chardonnay, and Volnay and Monthélie with Pinot Noir.The average age of the vines is high (32 years old), and the grapes are harvested manually after numerous checks for maturity.",
        image_path: "assets/page/domaine/Comtes Lafon.png",
        link_url: "http://www.comteslafon.fr/index.htm"
    },
    {
        id: 4,
        domain_name: "Domaine Lignier Michelot",
        domain_description: "Virgile Lignier, the current head of this fine eight hectare domaine is the fourth generation to run the family property, 2000 being the first vintage that he vinified completely on his own. Virgile is meticulous in the vineyards, where he routinely prunes aggressively to limit yields, and seeks to be as natural as",
        image_path: "assets/page/domaine/Domaine Lignier Michelot 1.png",
        link_url: "https://domainevirgileligniermichelot.fr"
    },
    {
        id: 5,
        domain_name: "Domaine Pierre Damoy",
        domain_description: "Domaine Pierre Damoy is one of the most acclaimed domaine in Gevrey Chambertin. It holds the largest part of the famous Clos de Beze.",
        image_path: "assets/page/domaine/Domaine Pierre Damoy1.png",
        link_url: "https://www.larvf.com/,domaine-pierre-damoy,10550,400959.asp"
    },
    {
        id: 6,
        domain_name: "Gerard Mugneret",
        domain_description: "The domaine is producing pure and stylish wines who are very difficult to find on export markets. Most of the 13 cultivated vineyards are based in Vosne-Romanée.",
        image_path: "assets/page/domaine/Gerard Mugneret.png",
        link_url: "https://www.gerard-mugneret.fr/en/"
    },
    {
        id: 7,
        domain_name: "Louis Picamelot",
        domain_description: "Burgundy's sparkling wine Crémant de Bourgogne has come a long way since 1926 when Louis Picamelot started its production. He was one of the first producers in the region. The different cuvées of Louis Picamelot have consistently won awards and recognition from prestigious publications and is now considered as one of the top cremant",
        image_path: "assets/page/domaine/Louis Picamelot.png",
        link_url: "https://louispicamelot.com/en/"
    },
    {
        id: 8,
        domain_name: "Chateau de Monthelie",
        domain_description: "Château de Monthélie was built in 1746 and since 1903 it is owned by the De Suremain family. Since 2000, the crop is Ecocert certified and the wineyard is managed under the concept of biodynamic by Eric de Suremain, the winemaker. The domain produces Monthelie, Monthelie 1er cru and Rully 1er cru wines.",
        image_path: "assets/page/domaine/Chateau de Monthelie.png",
        link_url: "https://domainedesuremain.com"
    },
    {
        id: 9,
        domain_name: "Domaine Alain Jeanniard",
        domain_description: "The Jeanniard family is passionately interested in viticulture since 1755 and Alain Jeanniard’s domain represents today 4 hectares composed of some “premiers crus”: Les Combottes en Chambolle-Musigny, Les Chenevery en Morey-St-Denis and les Saussilles en Pommard.",
        image_path: "assets/page/domaine/Domaine Alain Jeanniard.png",
        link_url: "http://www.domainealainjeanniard.fr"
    },
    {
        id: 10,
        domain_name: "Domaine Philippe Leclerc",
        domain_description: "Based in the heart of Gevrey-Chambertin since his birth, Philippe Leclerc elaborates wines exclusively with grapes from his vineyards which are composed of Bourgogne, Chambolle Musigny, Gevrey Chambertin and Gevrey Chambertin 1er Cru appellations.",
        image_path: "assets/page/domaine/Domaine Philippe Leclerc.png",
        link_url: "https://www.philippe-leclerc.com"
    },
    {
        id: 11,
        domain_name: "Marechal",
        domain_description: "The domaine of Catherine and Claude Maréchal holds a total of 10 hectares of vineyard located in Pommard, Savigny-Les-Beaune, Auxey Duresses, Chorey-Les-Beaune and Ladoix.",
        image_path: "assets/page/domaine/Domaine Marechal 1.png",
        link_url: "https://domainemarechal.com/en/"
    },
    {
        id: 12,
        domain_name: "Domaine Henri Boillot ",
        domain_description: "The domain exists since 1855 and Herni's wines inlcude several Premier Crus from Meursault, Puligny Montrachet (including Les Mouchères, Monopole), Chassagne-Montrachet, Volnay and Savigny-les-Beaune.",
        image_path: "assets/page/domaine/Henri Boillot .png",
        link_url: "http://www.henri-boillot.com/#!en/"
    },
    {
        id: 13,
        domain_name: "Domaine Laurent Roumier",
        domain_description: "Laurent Roumier has set up his own domain in 1991 with a part of the domain founded by his grand-father George Roumier in 1924. He has now 12 hectares of vines in Chambolle-Musigny. The vines have an average age of 35 years and are worked naturally without fertilizers or herbicide.",
        image_path: "assets/page/domaine/Domaine Laurent Roumier.png",
        link_url: "https://www.domaine-roumier.fr"
    },
    {
        id: 14,
        domain_name: "Domaine Trapet",
        domain_description: "Domaine Louis Trapet in Burgundy was established in 1870. It has now 12 hectares of vines including 1.9 hectares of Chambertin. The Domaine is currently run by Jean-Louis Trapet who moved towards biodynamic farming in the mid 1990s. The domaine has been certified by Biodivin since 1998 and Demeter from 2005.",
        image_path: "assets/page/domaine/Domaine Trapet.png",
        link_url: "http://www.domaine-trapet.fr/en/burgundy-wines/eloge-de-la-douceur.html"
    },
    {
        id: 15,
        domain_name: "Domaine Thierry Violot-Guillemard",
        domain_description: "Thierry violot-Guillemard’s vineyards have been under organic management since 1999. He is currently the owner of vineyards in the appellations of Pommard Platière, Rugiens, Epenots and Derrière Saint-Jean as well as Beaune Clos des Mouches.",
        image_path: "assets/page/domaine/Domaine Thierry Violot-Guillemard.png",
        link_url: "https://www.violot-guillemard.fr"
    },
    {
        id: 16,
        domain_name: "Domaine Chantal Remy",
        domain_description: "The domain produces fine wine including in Clos des Rosiers (Monopole), Clos de la Roche, Latricieres chambertin and Chambertin.",
        image_path: "assets/page/domaine/Domaine Chantal Remy.png",
        link_url: "https://domaine-chantal-remy.com"
    },

    {
        id: 17,
        domain_name: "Domaine Dominique Laurent",
        domain_description: "Dominique Laurent is a famous negociant-eleveur. He has only tiny vineyard holdings of his own and buys grapes or new wine from various growers, focussing only on old vines and low yields from almost every appellation on the Cote d'Or and occasionally from the Côte Chalonnaise.",
        image_path: "assets/page/domaine/Domaine Dominique Laurent .png",
        link_url: ""
    },
    {
        id: 18,
        domain_name: "Domaine Felletig",
        domain_description: "Gilbert and Christine Felettig manage this increasingly popular domaine of 2.5 ha which extends from Gevrey-Chambertin to Nuits Saint Georges.",
        image_path: "assets/page/domaine/Domaine Felletig.png",
        link_url: "https://www.domaine-felettig.com/english"
    },
    {
        id: 19,
        domain_name: "Domaine Robert Sirugue",
        domain_description: "Domaine Robert Sirugue is a family-run estate of 11 ha based in Vosne-Romanée. Grands Echezeaux and Vosne-Romanée 1er Cru Les Petits Monts are the treasure of this estate.",
        image_path: "assets/page/domaine/Domaine Robert Sirugue.png",
        link_url: "https://www.dvp-vins-domaines.com/fr/domaine/51/domaine-robert-sirugue"
    }
    ]
const DomainePage: React.FC<IDomaineProps> = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        window.addEventListener("load", handleLoading);
        return () => window.removeEventListener("load", handleLoading);
    }, [])
    return (
        <>
                <div>
                    <Navbar></Navbar>
                    <Menu current={'Domaine'} descript={'Wines with Authenticity, Distinction and Character'}></Menu>
                    <DomaineComponent arrayImg={arrayImg}></DomaineComponent>
                    <Footer></Footer>
                </div>
        </>
    )
}
export default DomainePage