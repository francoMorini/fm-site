import styles from "./Presentation.module.css";

export function Presentation () 
{

    const imageExperience = '{ exp }';
    const imageName = '{ name }';

    return (
        <div>

            <div>
                <h1> <span> public </span> presentation () </h1>
                <p> 
                    <span id="constant"> const </span> name = <span id="string"> 'Franco Morini' </span>; <br></br>
                    <span id="constant"> const </span> exp  = <span id="string"> '+5' </span>;
                </p>
                <p className={ styles.comment }>
                    /* <br></br>
                    Fullstack developer. <br></br>
                    Fan of innovation and new technologies. <br></br>
                    */
                </p>
            </div>

            <div>
                <img src="./assets/francomorini.png" width={300} height={300} alt="Franco Morini"></img>
                <span> { imageExperience } </span>
                <span> { imageName } </span>
            </div>

        </div>
    );
}