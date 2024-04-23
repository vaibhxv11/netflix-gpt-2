import OpenAI from "openai"

 const OPENAI_KEY=sk-proj-oyUyjISOK8rLb8fDWHhOT3BlbkFJg6bN6zC0x2QS9DnbWrih
 const openai=new OpenAI({
    apiKey :OPENAI_KEY,
    dangerouslyAllowBrowser:true ,
 
});

export default openai;
