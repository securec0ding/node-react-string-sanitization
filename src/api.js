import fetch from "isomorphic-fetch";

export function fetchCircuits( ) {
    return fetch( "https://hunter2labs.s3.amazonaws.com/APIPayload.json" )
        .then( res => res.json( ) )
        .then( res => res.MRData.CircuitTable.Circuits );
}