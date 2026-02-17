import "./Product.css";
import Price from "./Price";

function Product({title, idx}){
        let oldPrices=["12,869", "11,234", "965", "599"];
        let newPrices = ["8,999", "9,199", "899", "278"];
        let description = [["8,000 DPI","15 Programmable buttoms"], ["intuitive surface", "designed for iPad Pro"], ["designed for iPad Pro","intuitive surface"], ["wireless","optical orientaiton"]];
        return(
                <div className="Product">
                  <h4>{title}</h4>
                  <p>{description[idx][0]}</p>
                  <p>{description[idx][1]}</p>
                  <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
                </div>
        );
}


export default Product;