import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {BackgoundComponent} from '../../../components';
import {SvgXml} from 'react-native-svg';
import {BackButton, FitHub} from '../../../assets/svg/iconSVG';
import {StackScreenProps} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../../navigation/ProfileStackNavigation';

interface DataTreatmentProps
  extends StackScreenProps<ProfileStackParamList, 'DataTreatment'> {}

const DataTreatmentScreen = ({navigation}: DataTreatmentProps) => {
  return (
    <BackgoundComponent>
      <View style={{flex: 1, marginHorizontal: 16}}>
        <View
          style={{
            height: '6%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                borderWidth: 1,
                borderColor: '#6B7280',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml
                xml={BackButton}
                height={20}
                color={'#FFFFFF'}
                style={{right: 2}}
              />
            </View>
          </TouchableOpacity>
          <View style={{right: 12}}>
            <SvgXml xml={FitHub} width={60} height={20} />
          </View>
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{paddingBottom: 160, paddingTop: 4}}
            showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 12,
                color: '#FFFFFF',
                textAlign: 'center',
              }}>
              Política de Tratamiento de Datos de FitHub Connect
            </Text>
            <Text style={{fontSize: 12, marginBottom: 20, color: '#2A49FF'}}>
              Fecha de Entrada en Vigencia: 11 de marzo de 2024
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              1. Introducción
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              En FitHub Connect, nos dedicamos a proteger la privacidad y
              seguridad de los datos personales de nuestros usuarios. Esta
              Política de Tratamiento de Datos ("Política") establece cómo
              recopilamos, utilizamos, compartimos y protegemos la información
              personal dentro de nuestra aplicación. El uso de FitHub Connect
              implica el consentimiento a esta Política.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              2. Alcance
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Esta Política se aplica a todos los datos personales que FitHub
              Connect recopila sobre los usuarios a través de nuestra
              aplicación.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              3. Datos Recopilados
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 6,
                color: '#989898',
                fontWeight: '300',
              }}>
              Recopilamos los siguientes tipos de datos personales:
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Datos de Identificación: Nombres completos, dirección de correo
              electrónico, número de teléfono, fecha de nacimiento, y género.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Información de Actividad Física y Salud: Tallas de bíceps,
              piernas, espalda, glúteos, antebrazo, pecho, cintura, así como
              estatura y peso.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Datos de Ubicación: Para ofrecer recomendaciones personalizadas y
              servicios basados en la ubicación.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Información de Uso y Preferencias: Cómo interactúa con nuestra
              aplicación, preferencias expresadas y configuraciones elegidas.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              4. Finalidad del Tratamiento
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 6,
                color: '#989898',
                fontWeight: '300',
              }}>
              Usamos los datos personales recopilados para:
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Mejorar y personalizar la experiencia en nuestra aplicación.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Comunicarnos con los usuarios para soporte o información.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Realizar análisis estadísticos y de uso para mejorar nuestros
              servicios.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Desarrollar y ofrecer campañas publicitarias dirigidas y
              personalizadas.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              5. Base Jurídica
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 6,
                color: '#989898',
                fontWeight: '300',
              }}>
              El tratamiento de sus datos personales se realiza bajo las
              siguientes bases legales:
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Consentimiento del usuario, obtenido explícitamente para el
              tratamiento de sus datos personales.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              La necesidad de ejecutar un contrato en el que el usuario es
              parte, o para tomar medidas a solicitud del usuario antes de
              entrar en un contrato.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Cumplimiento de obligaciones legales aplicables a FitHub Connect.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              6. Derechos de los Usuarios
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 6,
                color: '#989898',
                fontWeight: '300',
              }}>
              Los usuarios tienen derecho a:
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Acceder, rectificar o eliminar sus datos personales.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Solicitar la limitación del tratamiento de sus datos.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Oponerse al tratamiento de sus datos.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Solicitar la portabilidad de sus datos.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Para ejercer estos derechos, los usuarios pueden contactarnos a
              través de los detalles de contacto proporcionados al final de esta
              Política.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              7. Compartición y Transferencia de Datos
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 6,
                color: '#989898',
                fontWeight: '300',
              }}>
              FitHub Connect puede compartir datos personales con terceros en
              las siguientes circunstancias:
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Con proveedores de servicios y asociados que trabajan en nuestro
              nombre.
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Para cumplir con leyes aplicables, responder a procesos legales o
              si es necesario para la protección de nuestros derechos o los de
              terceros.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              8. Seguridad de los Datos
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Implementamos medidas técnicas y organizativas para proteger los
              datos personales contra el acceso no autorizado, la alteración,
              divulgación o destrucción.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              9. Conservación de Datos
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Conservaremos los datos personales solo durante el tiempo
              necesario para cumplir con las finalidades para las cuales se
              recopilan, incluido el cumplimiento de cualquier obligación legal
              o contable.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              10. Uso de Cookies y Tecnologías Similares
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Utilizamos cookies y tecnologías similares para mejorar la
              experiencia de usuario, analizar el uso de nuestra aplicación y
              ofrecer contenido personalizado. Los usuarios pueden configurar su
              navegador para rechazar todas las cookies o indicar cuándo se
              envía una cookie.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              11. Modificaciones a la Política de Tratamiento de Datos
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Nos reservamos el derecho de modificar esta Política. Cualquier
              cambio será comunicado a través de nuestra aplicación o por correo
              electrónico.
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
                color: '#FFFFFF',
              }}>
              12. Contacto
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4,
                color: '#989898',
                fontWeight: '300',
              }}>
              Si tiene preguntas sobre esta Política o desea ejercer sus
              derechos de protección de datos, por favor contáctenos en:
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 20,
                color: '#989898',
                fontWeight: '300',
              }}>
              Correo Electrónico: fithubconnect@gmail.com
            </Text>
          </ScrollView>
        </View>
      </View>
    </BackgoundComponent>
  );
};

export default DataTreatmentScreen;
