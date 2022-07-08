import React from "react"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Message } from "../../../lib/models/message"

interface MessageProps {
  message: Message
}

export const MessageContent: React.FC<MessageProps> = ({
  message: { attachment, text, createdAt, updatedAt },
}) => {
  if (attachment) {
    const { filetype, url, filename } = attachment
    if (filetype.startsWith("image/")) {
      return (
        <Box boxSize="sm" my="2" h="full">
          <Image fit="contain" src={url} alt="" borderRadius="md" />
        </Box>
      )
    } else if (filetype.startsWith("audio/")) {
      return (
        <Box my="2">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio controls>
            <source src={url} type={filetype} />
          </audio>
        </Box>
      )
    } else if (filetype.startsWith("application/")) {
      return (
        <Box>
          <a href={url}>{filename}</a>
        </Box>
      )
    } else if (filetype.startsWith("video/")) {
      return (
        <Box>
          <video width="400" height="255" controls>
            <source src={url} type={filetype} />
            Your browser does not support the video tag.
          </video>
        </Box>
      )
    }
  }
  return (
    <Flex alignItems="center">
      <Text>
        <ReactMarkdown
          linkTarget="_blank"
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        >
          {/* @ts-ignore */}
          {text}
        </ReactMarkdown>
      </Text>
      {createdAt !== updatedAt && (
        <Text fontSize="10px" ml="1" color="labelGray">
          (edited)
        </Text>
      )}
    </Flex>
  )
}
