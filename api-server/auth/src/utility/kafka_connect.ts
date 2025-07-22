    import  { Kafka } from "kafkajs";

    const kafkaConfig = {
      clientId: 'my-nodejs-app',
      brokers: ['localhost:9092'], // Replace with your Kafka broker addresses
    };

    export const kafka = new Kafka(kafkaConfig);