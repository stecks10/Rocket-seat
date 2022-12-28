import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Participant } from "../components/Participant";

import { styles } from './styles';

export function Home() {
  const participants = ['Rodrigo', 'Vitor', 'Nildo', 'Joao', 'fabio', 'larissa', 'cadu', 'jose', 'nilson', 'sandra']

  function handleParticipantAdd() {
    console.log("Voce clicou no botao de adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`voce clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 27 de dezembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome do participante" placeholderTextColor="#6b6b6b" />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove("Vitor")} />
          ))
        }
      </ScrollView>

    </View>
  )
}