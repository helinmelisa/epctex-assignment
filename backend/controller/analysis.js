import Analysis from "../models/analysis.js";
import Wappalyzer from 'wappalyzer';

export const getAnalysisDetail = async (req,res) => {
    try{
        if (req.query.id) {
            const analysis = await Analysis.findById({ id: req.query.id });
            if (!analysis) {
              res.status(400).json({ message: 'cannot find' });
            } else {
                res.status(200).json({
                  id: analysis.id,
                  url: analysis.url,
                  technologies: analysis.technologies,
                  pageCount: analysis.pageCount,
                  status: analysis.status,
                });
              }
        } 
   } 
    catch(error){
        res.status(404).json({
            message: error.message,
        });
    }
};

export const getAnalysis = async (req, res) => {
    try {
      const analysis = await Analysis.find();
      res.status(200).json(analysis);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  };

export const createAnalysis = async (req, res) => {
    try{
        const analysis = req.body;
        const id = Math.floor(Math.random() * 10000);
        const newAnalysis = new Analysis({
           id: id,
           url: analysis.url,
           technologies: [],
           status: 'LOADING',
             }); 
         const savedAnalysis = await newAnalysis.save();
         detectTech(id, analysis.url);
         res.status(201).json(savedAnalysis);
       }
    catch(error){
        res.status(409).json({
            message: error.message,
        });
    }
};

const options = {
    debug: false,
    delay: 500,
    headers: {},
    maxDepth: 4,
    maxUrls: 10,
    maxWait: 10000,
    recursive: true,
    probe: true,
    proxy: false,
    userAgent: 'Wappalyzer',
    htmlMaxCols: 2000,
    htmlMaxRows: 2000,
    noScripts: false,
    noRedirect: false,
};
  
const wappalyzer = new Wappalyzer(options);

const detectTech = async (id,url) => {
    try {
        await wappalyzer.init();
        const headers = {};
        const site = await wappalyzer.open(url,headers);
        site.on("error", console.error)
        
        const results = await site.analyze();
        const pageCount = Object.keys(results.urls).length;
        const techArray = [];
            results.technologies.forEach((el) => {
            techArray.push(el.url);
            console.log(el.url);
    });

        const result = await Analysis.findOne({ id: id });
        result.technologies = techArray;
        result.status = 'DONE';
        result.pageCount = pageCount;
        result.save();


    } catch (error) {
        console.error(error);
    }

    await wappalyzer.destroy();
};