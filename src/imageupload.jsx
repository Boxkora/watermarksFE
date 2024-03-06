import { Group, Text, rem , Image, SimpleGrid, Button, TextInput} from '@mantine/core';
import { Flex,Card,Box } from '@radix-ui/themes';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import axios from 'axios';

export default function EmbedWatermark() {
    const [files, setFiles] = useState([]);
    const [originalFiles, setOriginalFiles] = useState([]);
    const [watermarkText, setWatermarkText] = useState('');
    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <div key={index}>
                <Box>
                    <Image src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />
                    <Button onClick={() => downloadImage(index)}>Download Image</Button>
                </Box>
            </div>
        );
    });

    const applyWatermark = (file, index) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('watermark', watermarkText);
    
        axios.post('http://localhost:5173/watermark', formData, {
            responseType: 'blob',
        }).then((response) => {
            const fileWithWatermark = new File([response.data], file.name, { type: 'image/jpeg' });
            setFiles(prevFiles => {
                const newFiles = [...prevFiles];
                newFiles[index] = fileWithWatermark;
                return newFiles;
            });
        });
    };
    
    

    const downloadImage = (index) => {
        const file = files[index];
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <TextInput
                label="Watermark Text"
                placeholder="Enter your watermark text here"
                value={watermarkText}
                onChange={(event) => setWatermarkText(event.currentTarget.value)}
            />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={() => { 
                if (watermarkText.trim() === '') {
                    alert('There is no text');
                } else {
                    originalFiles.forEach(applyWatermark);
                }
            }}>Embed Watermark</Button>

            </div>
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Dropzone
                    onDrop={(acceptedFiles) => {
                        setFiles(acceptedFiles);
                        setOriginalFiles(acceptedFiles);
                    }}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={5 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                >
                    <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <IconUpload
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                                stroke={1.5}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto
                                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                                stroke={1.5}
                            />
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" inline>
                                Drag image here or click to select files
                            </Text>
                            <br />
                            <Text size="sm" c="dimmed" inline mt={7}>
                                Attach one file only, file should not exceed 5mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
                <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
                    {previews}
                </SimpleGrid>
            </div>
        </div>
    );
}
