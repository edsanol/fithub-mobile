import {useContext, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import {UserContext} from '../../../../context/UserContext';

interface LogoutModalProps {
  // status: boolean;
  handleModalStatus: (value: boolean) => void;
}

const LogoutModal = ({handleModalStatus}: LogoutModalProps) => {
  const slide = useRef(new Animated.Value(300)).current;
  const {logOut} = useContext(UserContext);

  const slideUp = () => {
    // Will change slide up the bottom sheet
    Animated.timing(slide, {
      toValue: -40,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    // Will slide down the bottom sheet
    Animated.timing(slide, {
      toValue: 400,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    slideUp();
  });

  const closeModal = () => {
    slideDown();

    setTimeout(() => {
      handleModalStatus(false);
    }, 800);
  };

  return (
    <Pressable onPress={closeModal} style={styles.backdrop}>
      <Pressable style={{width: '100%', height: '40%'}}>
        <Animated.View
          style={[styles.bottomSheet, {transform: [{translateY: slide}]}]}>
          <Text style={styles.title}>Cerrar Sesión</Text>
          <View style={styles.separator} />
          <Text style={styles.paragraph}>
            ¿Estás seguro que deseas cerrar sesión?
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={logOut}>
              <Text style={styles.saveButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Pressable>
    </Pressable>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(25,25,25,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0F1117',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  separator: {
    height: 0.4,
    width: '90%',
    backgroundColor: '#6B7280',
    alignSelf: 'center',
  },
  paragraph: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    width: '46%',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2A49FF',
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2A49FF',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#2A49FF',
    width: '46%',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
