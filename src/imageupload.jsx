import { Group, Text, rem , Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function BaseDemo() {
    const [files, setFiles] = useState<FileWithPath>([]);
    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
    });


    return (
    <div>
        <Dropzone
            onDrop={(files) => console.log('accepted files', files)}
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