import express from 'express'
import { PrintFileViewModel} from '../view-models/print-view-model'
export const PrintRouter = express.Router()

PrintRouter.use((req, res, next) => {
    console.log(`Executing request: ${JSON.stringify(req)} | at `, Date.now())
    next(res)
})

PrintRouter.post('/CreatePrint', (req, res) => {
    var validPrintResult = PrintFileViewModel.validate(req);
    if(validPrintResult.success){
        
        return res.status(200).send();
    }

    return res.status(400).send(`Bad request ${validPrintResult.message} | ${validPrintResult.details}`)
});

