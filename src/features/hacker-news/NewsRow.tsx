import { Box, HStack, Text } from '@chakra-ui/layout'
import { Tag, TagLabel } from '@chakra-ui/tag'
import React from 'react'
import { NewI } from './NewsI'

export const NewsRow = ({ data, ...props }: any) => {
    const getDate = (date: Date) => {
        const d = new Date(date);
        return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    }
    return (
        <a href={data.link}>
            <Box p={2} shadow="md" {...props}>
                <HStack spacing="5px">
                    <Tag variant="outline" colorScheme="gray">
                        <TagLabel>{data.title}</TagLabel>
                    </Tag>
                    <Text fontSize="xs" align="left">by {data.creator}</Text>
                    <Text fontSize="xs" align="left">@ {getDate(data.isoDate)}</Text>
                </HStack>
            </Box>
        </a>
    )
}