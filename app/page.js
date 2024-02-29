

import DropdownMenu from '@/components/DropdownMenu'
import { ArrowIcon, BellIcon, CaretIcon, MessengerIcon, PlusIcon } from '@/components/Icons'
import Navbar from '@/components/Navbar'
import Navitems from '@/components/Navitems'


const Home = () => {
  return (
    <>
      <Navbar>
        <Navitems icon={<CaretIcon />} text="text">
          <DropdownMenu />
        </Navitems>
      </Navbar>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ex saepe impedit at eum, exercitationem minus adipisci quam rem doloremque natus distinctio. Iure aliquam excepturi itaque veritatis quam ipsa, animi ad eum cum nulla odio earum impedit ut modi facere accusamus veniam natus. Aperiam quo quidem similique maxime amet saepe debitis numquam atque, culpa ipsa beatae eum voluptate eius illum at. Natus voluptatum vitae alias aliquid unde, reiciendis eum odio itaque veritatis at atque et! Vitae, dignissimos dolor incidunt nostrum, expedita qui, voluptatem nisi illo sunt quia explicabo deleniti iusto commodi. Perspiciatis doloremque voluptatem iusto praesentium ad quod perferendis accusamus.
      </h1>
    </>
  )
}

export default Home