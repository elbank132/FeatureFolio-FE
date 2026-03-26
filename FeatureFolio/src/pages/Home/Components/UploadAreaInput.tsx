import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export const UploadAreaInput = () => {
    // useCallback prevents the function from being recreated on every render
    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log('Files uploaded:', acceptedFiles);
        // Handle your file logic here (e.g., upload to S3 or preview)
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
        accept: {
            'image/*': ['.jpeg', '.png'],
        }
    });

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer bg-light-blue-background
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
        >
            <input {...getInputProps()} />

            <div className="flex flex-col items-center gap-2">
                <div className="bg-gold-10 p-3 mb-3 rounded-[50%]">
                    <img src="/icons/upload-image.svg" className="w-8 h-8"></img>
                </div>
                {isDragActive ? (
                    <p className="text-blue-600 font-medium">Drop the files here...</p>
                ) : (
                    <div>
                        <span className="font-medium text-2xl text-dark-blue">Upload Files</span>
                        <p className="text-muted-foreground">
                            Tap to select or drag and drop
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};