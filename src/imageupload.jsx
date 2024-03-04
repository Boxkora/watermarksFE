import { Group, Text, rem , Image, SimpleGrid, Button, TextInput } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { fabric } from 'fabric';

export default function BaseDemo() {
    const [files, setFiles] = useState([]);
    const [originalFiles, setOriginalFiles] = useState([]);
    const [watermarkText, setWatermarkText] = useState('');
    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <div key={index}>
                <Image src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />
                <Button onClick={() => downloadImage(index)}>Download Image</Button>
            </div>
        );
    });

    const applyWatermark = (file, index) => {
        const imageUrl = URL.createObjectURL(originalFiles[index]);
        fabric.Image.fromURL(imageUrl, function(img) {
            const canvas = new fabric.Canvas(null, { width: img.width, height: img.height });
            img.scaleToWidth(canvas.width);
            canvas.setHeight(img.height);
            canvas.add(img).renderAll();

            const text = new fabric.Text(watermarkText, { left: 10, top: 10, fill: '#fff', opacity: 0.1 });
            canvas.add(text).renderAll();

            const dataUrl = canvas.toDataURL({ format: 'jpeg' });
            fetch(dataUrl)
                .then(res => res.blob())
                .then(blob => {
                    const fileWithWatermark = new File([blob], file.name, { type: 'image/jpeg' });
                    setFiles(prevFiles => {
                        const newFiles = [...prevFiles];
                        newFiles[index] = fileWithWatermark;
                        return newFiles;
                    });
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
            <Button onClick={() => originalFiles.forEach(applyWatermark)}>Embed Watermark</Button>
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
    );
}
