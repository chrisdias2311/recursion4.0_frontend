import React from 'react'
import { Box } from '@mui/system';
import { Button, Card, CardContent, Icon, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna'
import CloseIcon from '@mui/icons-material/Close';





export default function Chatbot() {
    async function chat() {
        //const passage = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
        try {
            const passage = "the catagories are electronics,mobiles and laptops, home and kitchen, fashion and clothing.today there is a black friday sale. current offers are 50% off on electornics, 20% off on clothing, our saver"
            //const question = "Who is the CEO of Google?"


            console.log(data);
            const model = await qna.load();
            const answers = await model.findAnswers(data.toString(), passage);

            console.log(answers);
            changeReply(answers[0].text)
        } catch (err) { console.log(err) }//console.log(data.toString());
    }

    const [data, setData] = useState('');
    const [reply, setReply] = useState('');

    const changeReply = (e) => {
        setReply(e.toString());
    }
    const changeData = (e) => {
        setData(e.target.value)
    }
    return (
        <div sx={{ display: 'flex', float: 'right' }}>
            <Paper sx={{
                Height: '200px', Width: '200px', position: 'fixed', bottom: 10, right: 10, zIndex: 1
            }}>
                <Box sx={{ minHeight: '50px', bgcolor: 'lightgrey', justifyContent: 'center', display: 'flex', }}>
                    <Typography align='center' sx={{ justifyContent: 'center' }}>{reply}</Typography></Box>

                <TextField onChange={changeData} > </TextField>
                <Button onClick={chat}>enter</Button>

            </Paper >
        </div >
    )
}
