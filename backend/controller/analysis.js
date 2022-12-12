import Analysis from "../models/analysis.js";
const Wappalyzer = require('wappalyzer');
const { v4: uuidv4 } = require('uuid');

export const getAnalysis = async (req,res) => {
    try{
        // const analysis = await Analysis.findOne({ id: req.query.id });
        // res.status(200).json(analysis)
        if (req.query.id) {
            const analysis = await Analysis.findOne({ id: req.query.id });
            if (!analysis) {
              res.status(400).json({ message: 'Id not found' });
            } 
        }
   } 
    catch(error){
        res.status(404).json({
            message: error.message,
        });
    }
};

export const createAnalysis = async (req, res) => {
    const analysis = req.body;
    const id = uuidv4();
    const newAnalysis = new Analysis({
        id: id,
        name: analysis.name,
        technologies: [],
        status: 'PENDING',
          }); 
    try{
      await newAnalysis.save();
    }
    catch(error){
        res.status(409).json({
            message: error.message,
        });
    }
};