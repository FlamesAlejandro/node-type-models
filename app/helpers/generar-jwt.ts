import jwt  from 'jsonwebtoken';
import settings from '../../config/db/settings';

const generarJWT = ( correo: string, nombre: string ) => {

    return new Promise( (resolve, reject) => {

        const payload = { correo, nombre };

        jwt.sign( payload, settings.SECRET, {
            expiresIn: '4h'
        }, ( err, token) => {

            if ( err ) {
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })
}




export default generarJWT;

