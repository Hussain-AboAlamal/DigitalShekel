import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View, SafeAreaView } from "react-native";

import { useIntl } from "react-intl";
import { Portal, Text, PaperProvider, Icon, MD3Colors, IconButton } from 'react-native-paper';
import Panel from "../panel";
import Button from "../button";
// import { SafeAreaView } from "react-native-safe-area-context";
    
type ItemProps = {
    item: string;
    index: number;
};

/**
 * Render list item component
 */
const Item = ({item, index}: ItemProps): React.JSX.Element => (
  <View
  key={index}
  style={styles.item}>
        <Text style={styles.title}>- {item}</Text>
  </View>
);

type ElementProps = {
    title: string;
    data: any[];
}

function List({title, data=[]}: ElementProps): React.JSX.Element {
    const  intl = useIntl();
    // show/hide modal
    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);
    
    return <Panel>
        <Text variant="titleLarge">{title}</Text>

        {
            data.length == 0 && 
            <Text>{intl.formatMessage({id: 'noRecords'})}</Text>
        }

        {
            data.length > 0 &&
            <>
                <Text>- {data.slice(0, 1)}</Text>

                {
                    data.length > 1 &&
                    <TouchableWithoutFeedback
                    onPress={showModal}>
                        <Text style={{color: 'blue', marginTop: 4}}>{intl.formatMessage({id: 'viewAll'}) + ' ..>'}</Text>
                    </TouchableWithoutFeedback>
                }

                <Modal
                visible={modalVisible}
                transparent={false}
                onRequestClose={hideModal}
                animationType="slide">
                    <SafeAreaView
                    style={styles.modalContainer}>
                        <FlatList
                            data={data} 
                            renderItem={({item, index}) => <Item item={item} index={index} />}
                        />

                        <TouchableWithoutFeedback
                        onPress={hideModal}>
                            <Text
                            style={{textAlign: 'center'}}
                            variant="titleLarge">
                                {intl.formatMessage({id: 'close'})} X
                            </Text>
                        </TouchableWithoutFeedback>
                    </SafeAreaView>
                </Modal>
            </>
        }
    </Panel>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: 32,
    },
    modalContainer: {
        // backgroundColor: 'red',
        padding: 24,
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default List;
