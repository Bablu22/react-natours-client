import React from 'react'
import { HiOutlinePhotograph } from 'react-icons/hi'

function FileUpload({ filePicker, addImage, selectFile, setFunction }) {
    return (
        <>
            <div className="pt-4 mb-6">
                <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                    Upload File
                </label>

                <div className="my-2">
                    <div>
                        <input
                            type="file"
                            name="photo"
                            id=""
                            ref={filePicker}
                            onChange={addImage}
                            hidden
                            readOnly
                        />
                    </div>
                </div>
                <div>
                    {selectFile ? (
                        <div className="relative w-full rounded-md h-26 ">
                            <img
                                src={selectFile}
                                layout="fill"
                                alt="profile"
                                onClick={setFunction}
                                className="w-full rounded-md aspect-video"
                            />
                        </div>
                    ) : (
                        <div
                            onClick={() => filePicker.current.click()}
                            className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full cursor-pointer font-sanx"
                        >
                            <HiOutlinePhotograph className="text-red-600 h-7 w-7" />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FileUpload