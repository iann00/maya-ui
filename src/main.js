import MAvatar from './components/MAvatar.vue'
import MAvatarUpload from './components/MAvatarUpload.vue'
import MBannerUpload from './components/MBannerUpload.vue'
import MButton from './components/MButton.vue'
import MFloatingButton from './components/MFloatingButton'
import MChip from './components/MChip.vue'
import MDialog from './components/MDialog.vue'
import MCol from './components/MCol.vue'
import MContainer from './components/MContainer.vue'
import MTitle from './components/MTitle.vue'
import MInput from './components/MInput.vue'
import MItem from './components/MItem.vue'
import MLoading from './components/MLoading.vue'
import MMenu from './components/MMenu.vue'
import MRow from './components/MRow.vue'
import MNotification from './components/MNotification.vue'
import MSubtitle from './components/MSubtitle.vue'
import MSwitch from './components/MSwitch.vue'
import MToolbar from './components/MToolbar.vue'
import MUpload from './components/MUpload.vue'
import MSelect from './components/MSelect.vue'
import MHeader from './components/MHeader.vue'
import MCloseButton from './components/MCloseButton.vue'

const components = {
	MAvatar,
	MAvatarUpload,
	MBannerUpload,
	MButton,
	MFloatingButton,
	MChip,
	MDialog,
	MCol,
	MContainer,
	MTitle,
	MInput,
	MItem,
	MLoading,
	MNotification,
	MMenu,
	MRow,
	MSubtitle,
	MSwitch,
	MToolbar,
	MUpload,
	MSelect,
	MHeader,
	MCloseButton
}

const Maya = {
	install(Vue) {
		for (const name in components) {
			const component = components[name];
			Vue.component(component.name, component);
		}
	}
}

export default Maya

if (typeof window != 'undefined' && window.Vue) {
	window.Vue.use(Maya)
}
