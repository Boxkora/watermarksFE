import { Flex,Card,Text,Inset,Strong,Box,Button } from '@radix-ui/themes';
import pic from './assets/imgembed1.png';
import pic2 from './assets/imgprove1.png';
import {useNavigate} from "react-router-dom";

export default function Index(){
    const navigate = useNavigate();
    const roundToUpload = () => {
        let path = "/upload";
        navigate(path);
    }
    const roundToDownload = () => {
        let path = "/download";
        navigate(path);
    }
    return(
        <>
        <div style={{backgroundColor: 'var(--black-a11)',height:'700px' }}>
            <div className='MainPageIntroduce'>
                <Flex gap="5">
                    <Box className='MainPageIntroducetext'><h1>Welcome to Space Station,</h1><p>Space Station will help you protect your image copyright by assigning watermarks to images and helping you verify everyone image ownership.</p>
                    </Box>
                    
                </Flex>
            </div>
            <br />
            <br />
            <Flex className='MainPageContent' gap="9">
                <Box>
                    <Card size="2" style={{ maxWidth: 240,color:'var(--violet-8)' , backgroundColor: 'var(--black-a8)' }}>
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                            src={pic}
                            alt="wrong"
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: 190,
                                height: 190,
                            }}
                            />
                        </Inset>
                        <Text as="p" size="3">
                            <Strong>Watermarks Embed</Strong> 
                        </Text>
                        <br />
                        <br />
                        <Button onClick={roundToUpload} className='MainPageContentButton' style={{
                            backgroundColor: 'var(--violet-11)',
                            marginLeft: '27%',        
                        }}>Click me
                        </Button>
                    </Card>
                </Box>

                <Box>
                    <Card size="2" style={{ maxWidth: 240,color:'var(--violet-8)' , backgroundColor: 'var(--black-a8)' }}>
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                            src={pic2}
                            alt="wrong"
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: 190,
                                height: 190,
                            }}
                            />
                        </Inset>
                        <Text as="p" size="3">
                            <Strong>Watermarks Identify</Strong> 
                        </Text>
                        <br />
                        <br />
                        <Button onClick={roundToDownload} className='MainPageContentButton' style={{
                            backgroundColor: 'var(--violet-11)',
                            marginLeft: '27%',        
                        }}>Click me
                        </Button>
                    </Card>
                </Box>
            </Flex>
        </div>
            <div className='MainPageBottom'>
                <br />
                <Box style={{marginLeft:'20px'}}> <p><strong>520k0060 <br /> 520K0078</strong></p></Box>
            </div>
        </>
    );
}