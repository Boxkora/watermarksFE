import { Flex,Card,Text,Inset,Strong,Box,Button } from '@radix-ui/themes';
import BaseDemo from './imageupload';

export default function Upload(){

    return(
        <>
            <div style={{backgroundColor: 'var(--black-a11)',height:'700px' }}>
                <div className='MainPageIntroduce'>
                    <Flex gap="5">
                        <Box className='MainPageIntroducetext'><h1>Watermark Embed,</h1><p>Space Station will help you protect your ownership by provide you a tool to embed your own Watermark into the image.</p>
                        </Box>
                        
                    </Flex>
                </div>

            <br />
            <br />
            <Flex className='MainPageContent' gap="9">
                <div className='MainPageBox'>
                    <Box>
                            <BaseDemo></BaseDemo>
                    </Box>
                </div>
            </Flex>
        </div>
            <div className='MainPageBottom'>
                <br />
                <Box style={{marginLeft:'20px'}}> <p><strong>520k0060 <br /> 520K0078</strong></p></Box>
            </div>
        </>
            )


}