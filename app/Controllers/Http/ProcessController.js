'use strict'
const Database = use('Database')

class ProcessController {

    async store({request, response, params}){
        
                
       const {  
                requestid,
                processed,
                match,
                alerted,
                urlphoto,
                blobimg,
                latitude,
                longitude,
                resquestdate,
                idphoto,
                numbus

                } = request.all()

        
        try {
            const newId = await Database
                .insert({
                    requestid,
                    processed,
                    match,
                    alerted,
                    urlphoto,
                    blobimg,
                    latitude,
                    longitude,
                    resquestdate,
                    idphoto,
                    numbus
                })
                .into('alertrequest')
            console.log(newId)
        } catch (e) {
            console.log(e)
        }


/*    
        CREATE TABLE AlertRequest(
            RequestId SERIAL PRIMARY KEY,
            Processed BIT,
            Match BIT,
            Alerted BIT,
            UrlPhoto VARCHAR,
            BlobImg VARCHAR,
            Latitude REAL,
            Longitude REAL,
            ResquestDate DATE,
            IdPhoto INTEGER,
            NumBus INTEGER
        )
*/
    }
}

module.exports = ProcessController

