import { TableCaption } from '@chakra-ui/table'
import { Tr } from '@chakra-ui/table'
import { Tbody } from '@chakra-ui/table'
import { Tfoot } from '@chakra-ui/table'
import { Td } from '@chakra-ui/table'
import { Th } from '@chakra-ui/table'
import { Thead } from '@chakra-ui/table'
import { Table } from '@chakra-ui/table'
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { currentWeather } from './weatherSlice'
import { WeatherIconsMap } from './consts'
import { HStack, VStack } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/tag'

export const WeatherTable = ({ numberOfDays = 7, props }: any) => {
    const weather = useAppSelector(currentWeather);
    const dispatch = useAppDispatch();
    const generateDays = (numberOfDays: number) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const daysFromToday = [];
        for (let i = 0; i < numberOfDays; i++) {
            const today = new Date();
            today.setDate(today.getDate() + i);
            daysFromToday.push(days[today.getDay()])
        }

        return daysFromToday;
    }

    const getIcon = (text: string) => {
        return WeatherIconsMap.filter(el => el.text === text)[0].icon
    }

    const generateTable = () => {
        return (
            <Table variant="simple">
                <TableCaption>Weather</TableCaption>
                <Thead>
                    <Tr>
                        {generatedDays.map((el) => <Th>{el}</Th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        {weather.map((el: any) => {
                            return (
                                <Td>
                                    <VStack
                                        spacing={1}
                                        align="center"
                                    >
                                        <i className={`wi ${getIcon(el.weather)}`}></i>
                                        <Tag variant="solid" colorScheme="orange">
                                            Max: {el.temp2m.max}
                                        </Tag>
                                        <Tag variant="solid" colorScheme="blue">
                                            Min: {el.temp2m.max}
                                        </Tag>
                                    </VStack>
                                </Td>
                            )
                        })}
                    </Tr>
                </Tbody>
            </Table>
        )
    }

    const generatedDays = generateDays(numberOfDays);
    return (
        <div>
            {/*
                weather ?
                    generateTable()
                    : <p>Loading</p>
            */}
            {
                weather ?
                    <HStack>
                        {generatedDays.map((el, i) => {
                            return (
                                <VStack
                                    spacing={1}
                                    align="center"
                                >
                                    <p>{el}</p>
                                    <i className={`wi ${getIcon(weather[i].weather)}`}></i>
                                    <Tag variant="outline" colorScheme="orange">
                                        Max: {weather[i].temp2m.max}
                                    </Tag>
                                    <Tag variant="outline" colorScheme="blue">
                                        Min: {weather[i].temp2m.min}
                                    </Tag>
                                </VStack>
                            )
                        })}
                    </HStack>
                    : <p>Loading</p>
            }
        </div>
    )
}