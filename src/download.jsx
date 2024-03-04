import { Flex,Card,Text,Inset,Strong,Box,Button } from '@radix-ui/themes';


export default function Download(){

    return(
        <>
            <div style={{backgroundColor: 'var(--black-a11)',height:'700px' }}>
                <div className='MainPageIntroduce'>
                    <Flex gap="5">
                        <Box className='MainPageIntroducetext'><h1>Watermark Identify,</h1><p>Space Station will help you, verify everyone image ownership by checking wether watermarks applied to the image or not .</p>
                        </Box>
                        
                    </Flex>
                </div>

            <br />
            <br />
            <Flex className='MainPageContent' gap="9">
            
            </Flex>
        </div>
            <div className='MainPageBottom'>
                <br />
                <Box style={{marginLeft:'20px'}}> <p><strong>520k0060 <br /> 520K0078</strong></p></Box>
            </div>
        </>
            )


}